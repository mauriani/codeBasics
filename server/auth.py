from flask import Blueprint, make_response, jsonify, request
from server.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from server import db
from server import CustomError
auth = Blueprint('auth', __name__)


@auth.route('/sign-up', methods=['POST'])
def sign_up():
    if request.method == 'POST':
        try:
            data = request.json

            nome = data['nome']
            email = data['email']
            senha = data['senha']

            user = User.query.filter_by(email=email).first()

            # retorna erro caso o email já esteja cadastrado
            if (user is not None):
                raise CustomError('E-mail já cadastrado', 401)

            # add user to database
            new_user = User(email=email, nome=nome,
                            senha=generate_password_hash(senha))

            db.session.add(new_user)
            db.session.commit()

            return make_response(
                jsonify(
                    message="Usuário criado",
                    status=200
                )
            )

        except CustomError as error:
            return make_response(
                jsonify(
                    message=error.message,
                    status=error.status
                )
            )
        except:
            return make_response(
                jsonify(
                    message="Algo deu errado",
                    status=401
                )
            )


@ auth.route('/sign-in', methods=['POST'])
def sign_up():
    if request.method == 'POST':
        try:
            data = request.json

            email = data['email']
            senha = data['senha']

            user = User.query.filter_by(email=email).first()

            if user:
                if check_password_hash(user.senha, senha):
                    return make_response(
                        jsonify(
                            message="Usuário logado com sucesso",
                            status=200
                        )
                    )
                else:
                    raise CustomError("Senha inválida", 401)
            else:
                raise CustomError("E-mail não cadastrado", 401)

        except CustomError as error:
            return make_response(
                jsonify(
                    message=error.message,
                    status=error.status
                )
            )
        except:
            return make_response(
                jsonify(
                    message="Algo deu errado",
                    status=401
                )
            )
