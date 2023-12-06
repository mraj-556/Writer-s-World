import base64, re, sqlite3 as sql
from flask import Flask, render_template, Response , jsonify , request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


def insert_record(db_name,tablename,**kwarg):
    #  {db_name:"db_name", tabelename:"tab_name", col1:"value", , col2:"value".....}
    conn_obj = sql.connect(db_name)
    cursor = conn_obj.cursor()
    cursor.execute()





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