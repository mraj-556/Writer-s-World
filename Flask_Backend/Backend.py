import base64, re, sqlite3 as sql, bcrypt
import json
from datetime import datetime
from flask import Flask, render_template, Response , jsonify , request, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def db_manipulation(cmd,db_name=None,cursor_obj=None):
    if cmd=="connect" :
        if db_name is not None:
            try:
                conn_obj = sql.connect(db_name)
                cursor = conn_obj.cursor()
                print("Database connected")
                return conn_obj,cursor
            except Exception as err:
                print("Error connecting to db",err)
                return "Connection_error"
        else:
            print("Database name is required to connect")
    elif cmd=="close":
        if cursor_obj is not None:
            try:
                cursor_obj.commit()
                cursor_obj.close()
                print("Database closed")
            except Exception as err:
                print("Error in closing : ",err)
        else:
            print("Cursor object reference required to close connection")

def insert_record(db_name:str,tablename:str,data:dict):
    #  data = { col1:"value", , col2:"value".....}
    db_connected_references = db_manipulation("connect",db_name=db_name)
    if db_connected_references!="Connection_error":
        qn_mark = f'({", ".join("?" for _ in range(len(data)))})'
        cmd1 = f"insert into {tablename}{tuple(data.keys())} values{qn_mark}"
        cmd2 = (list(data.values()))
        print(cmd1,cmd2)
        db_connected_references[1].execute(f"{cmd1}",(cmd2))
        print("Inserteed info")

        db_manipulation("close",cursor_obj=db_connected_references[0])

def retrive_record(db_name:str, tablename:str, columns=None, conditions=None, row=0):
    # data = {"condition":"condition_text"}
    # row = 0 : to get whole row (only conditions list required)
    # row = 1 : to get specific columns (column names list and conditions list required)
    # row = 2 : to get whole database row 

    db_connected_references = db_manipulation("connect",db_name=db_name)
    if db_connected_references!="Connection_error":
        try:
            if row==0:
                if conditions is not None:
                    conditions_lst = list(conditions.items())
                    cond_str = ' and '.join(f'{key}=?' for key, value in conditions_lst)
                    cmd1 = f"select * from {tablename} where {cond_str} "
                    cmd2 = list(conditions.values())
                    retrived_row = db_connected_references[1].execute(cmd1,(cmd2))
                    retrived_row = retrived_row.fetchall()
                    print("Row Retrived")
                    return retrived_row
                else:
                    print("Conditions required to retrive a row.")
            if row==1:
                if conditions is not None and columns is not None:
                    conditions_lst = list(conditions.items())
                    cond_str = ' and '.join(f'{key}=?' for key, value in conditions_lst)
                    cols = " ".join(columns)

                    cmd1 = f"select {cols} from {tablename} where {cond_str} "
                    cmd2 = list(conditions.values())

                    retrived_cols = db_connected_references[1].execute(cmd1,(cmd2)).fetchall()
                    print("Columns Retrived")
                    return retrived_cols
                else:
                    print("Column names and conditions required to retrive columns")
            if row==2:
                cmd = f"select * from {tablename}"
                retrived_all_rows = db_connected_references[1].execute(cmd)
                retrived_all_rows = retrived_all_rows.fetchall()
                print("All rows Retrived")
                return retrived_all_rows
        except Exception as err:
            print("Error in retriving : ",err)
        finally:
            db_manipulation("close",cursor_obj=db_connected_references[0])

def Update_record(db_name, tablename, col_val=None, conditions=None):
    db_connected_references = db_manipulation("connect",db_name=db_name)
    if db_connected_references!="Connection_error":
        if col_val is not None and conditions is not None:
            col_val = ' , '.join(f"{key}='{value}'" for key, value in col_val.items())
            conditions_lst = list(conditions.items())
            cond_str = ' and '.join(f'{key}=?' for key, value in conditions_lst)

            cmd1 = f"update {tablename} set {col_val} where {cond_str}"
            cmd2 = list(conditions.values())
            print(cmd1)
            db_connected_references[1].execute(cmd1,(cmd2))
            print("Record Updated")
            db_manipulation("close", cursor_obj=db_connected_references[0])




def preprocess_data(data:list):
    if isinstance(data,list):
        special_character_regex = re.compile(r'[!%^&*()<>?/\|}{:]') # except these symbols
        sql_injection_pattern = re.compile(r'\b(union|select|from|where|drop|alter|insert|update|delete)\b', re.IGNORECASE)

        for i in data:
            match1 = not bool(special_character_regex.search(i))
            match2 = not bool(sql_injection_pattern.search(i))
            match = match1 and match2
            if not match:
                print(i,match1, match2)
                return False
        
        return True
    else:
        print("List required")

@app.route('/userpage', methods=['GET','POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    valid_data = preprocess_data([username,password])

    if valid_data and (username and password) :
        retrived_password = retrive_record("main_db.db", "User_Account", columns=['Password'], conditions={'User_Name':username} , row=1)
        retrived_password = retrived_password[0][0]

        password_match = bcrypt.checkpw(password.encode('utf-8'), retrived_password)

        if password_match:
            session['User_Name'] = username

            msg = {"auth":"Allow", "msg":"Correct Credentials"}
            return jsonify(msg)
        else:
            msg = {"auth":"Deny", "msg":"Incorrect Credentials"}
            return jsonify(msg)
    else:
        msg = {"auth":"Deny", "msg":"Invalid Credentials"}
        return jsonify("Deny")




def password_strength(password):
    if len(password) < 8:
        return "Weak: Password should be at least 8 characters long."
    if not any(c.isupper() for c in password) or not any(c.islower() for c in password):
        return "Weak: Password should contain both uppercase and lowercase letters."
    if not any(c.isdigit() for c in password):
        return "Weak: Password should contain at least one digit."
    special_characters = re.compile(r'[@#$.]')
    if not bool(special_characters.search(password)):
        return "Weak: Password should contain at least one special character."
    return "Strong"

@app.route('/signup', methods=['GET','POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    password1 = data.get('password1')
    profile_pic = './static/default_profile.jpg'
    with open(profile_pic, 'rb') as f:
        profile_pic = f.read()
    nick_name = "Guest User"
    email = data.get('email')
    phone_no = "0123456789"
    dob = datetime(1900, 1, 1).date()
    regions = "US"
    language = "En"
    genre = json.dumps([])
    security_qn = data.get('security_qn')
    security_ans = data.get('security_ans')

    valid_data = preprocess_data([username,password,password1,nick_name,email,phone_no,regions,language])
    print(security_qn,security_ans)
    if valid_data:
        pass_strength = password_strength(password)
        if pass_strength == "Strong":
            if password == password1:
                print("Password matched")
                password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
                data = {"User_Name":username, "Password":password, "Profile_Picture":profile_pic, "Nick_Name":nick_name,
                        "Email":email, "Phone_No":phone_no, "Dob":dob, "Region":regions, "Language":language, "Genre":genre,
                        "Security_qn":security_qn, "Security_ans":security_ans, "Time_Stamp":datetime.now()
                        }
                insert_record("main_db.db","USer_Account",data)
                print("Sign Up Successfull")
                msg = {"auth":"Allow", "msg":"Sign Up Successfull"}
                return jsonify(msg)
            else:
                msg = {"auth":"Deny", "msg":"Password mismatch"}
                print("Password mismatch")
                return jsonify(msg)
        else:
            msg = {"auth":"Deny", "msg":pass_strength}
            print(pass_strength)
            return jsonify(msg)
    else:
        msg = {"auth":"Deny", "msg":"Invalid data"}
        print("Invalid data")
        return jsonify(msg)




@app.route('/publish', methods=['GET','POST'])
def publish():
    data = request.json



if __name__ == '__main__':
    app.run(debug=True)