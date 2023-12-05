import base64, re, sqlite3 as sql
from flask import Flask, render_template, Response , jsonify , request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


class Database():
    def __init__(self, db_name):
        self.db_name = db_name
        try:
            self.conn_obj = sql.connect(self.db_name)
            self.cursor = self.conn_obj.cursor()
            print("Connected to : {} and cursor created....".format(db_name))
        except Exception as err1:
            print("Exception1 : {}".format(err1))
    
    # def update_record(**kwargs): {tabelename:"tab_name", col1:"value"}





@app.route('/userpage', methods=['GET','POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if username=="Ashu" and password=="Ashu":
        return jsonify("Allow")
    else:
        return jsonify("Deny")


@app.route('/signup', methods=['GET','POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    password1 = data.get('password1')
    if password==password1 and len(username)!=0:
        return jsonify('Allow')
    else:
        return jsonify("Deny")


if __name__ == '__main__':
    app.run(debug=True)