import sqlite3
from flask import Flask, make_response, jsonify, request

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False


def db_connection():
    conn = None
    try:
        conn = sqlite3.connect('bd.sqlite')
    except sqlite3.error as e:
        print(e)
    return conn



@app.route('/groups', methods=['POST'])
def create_groups():
    conn = db_connection()
    try:
        data = request.json

        conn.execute(""" INSERT INTO groups(title, description, linkDiscord) VALUES (?, ?, ?)""", (
            data['title'],  data['description'], data['linkDiscord']
        ))

        conn.commit()

        return make_response(
            jsonify(
                message='Grupo cadastrado com sucesso',
            )
        )
    except:
        return make_response(
            jsonify(
                message='Grupo com esse assunto já existe',
            )
        )
    finally:
        conn.close()


@app.route('/groups', methods=['GET'])
def get_groups():
    conn = db_connection()
    rows = conn.execute("SELECT * FROM groups").fetchall()
    
    #convert row objects to dictionary

    return make_response(
        jsonify(
            data=rows
        )
    )


app.run()
