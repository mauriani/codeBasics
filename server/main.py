from bd import Groups
from flask import Flask, make_response, jsonify, request

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False


@app.route('/groups', methods=['GET'])
def get_carros():
    return make_response(
        jsonify(
            data=Groups
        )
    )


@app.route('/groups', methods=['POST'])
def create_carros():
    groups = request.json

    Groups.append(groups)

    return make_response(
        jsonify(
            message= "Grupo cadastrado com sucesso",
            data=groups
        )
    )


app.run()
