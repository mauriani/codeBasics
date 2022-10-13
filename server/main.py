import sqlite3
from flask import Flask, make_response, jsonify, request

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False


def db_connection():
    conn = None
    try:
        conn = sqlite3.connect('code.sqlite')
    except sqlite3.error as e:
        print(e)
    return conn



@app.route('/groups', methods=['POST'])
def get_groups():

        conn = db_connection()

        data = request.json

        conn.execute(""" INSERT INTO groups(title, description, linkDiscord) VALUES (?, ?, ?)""", (
            data['title'],  data['description'], data['linkDiscord']
        ))

        conn.commit()

        return make_response(
            jsonify(
                message='Carro cadastrado com sucesso',
            )
        )

app.run()
