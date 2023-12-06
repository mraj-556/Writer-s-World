import sqlite3 as sql

conn_obj = sql.connect("main_db.db")
cursor = conn_obj.cursor()

# cursor.execute("""create table User_Account(
#                User_Name text unique not null,       Password text not null,                Profile_Picture blob not null,
#                Nick_Name text not null,             Email text not null, Phone_No text,    Dob datetime, Region text not null,
#                Language text not null, Genre text,  Security_qn text not null,             Security_ans text not null
#                )
#                """)

# cursor.execute("""create table Post(
#                Post_Id text unique not null,    User_Name text not null,
#                Tags text not null,              Date_Time datetime not null
#                )
#                """)

# cursor.execute("""create table Post_Content(
#                Post_Id text unique not null,    Post_Type text not null,
#                Heading text,                    Content text not null
#                )
#                """)

# cursor.execute("""create table Engagements(
#                Post_Id text unique not null,    Likes integer not null,     Comments text
#                )
#                """)

# cursor.execute("""create table Popularity(
#                User_Name text unique not null,      Followers text,                     Following text,
#                Rating text not null,                Rating_Sample integer not null
#                )
#                """)

# cursor.execute("""create table Bio(
#                User_Name text unique not null,      Description text
#                )
#                """)

def drop_table(table):
    cursor.execute("drop table {}".format(table))
    print(f"Dropped table : {table}")

# drop_table("Bio")