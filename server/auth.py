from flask import Blueprint, render_template, request, flash, redirect, url_for, make_response, jsonify
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db

auth = Blueprint('auth', __name__)


@auth.route('/sign-up', methods=['POST'])
def sign_up():
    if request.method == 'POST':
        data = request.json

        nome = data['nome']
        email = data['email']
        senha = data['senha']

        user = User.query.filter_by(email=email).first()

        if user:
            return make_response(
                jsonify(
                    message="Usuário já existe.",
                    status=401
                )
            )
        else:
            # add user to database
            new_user = User(email=email, nome=nome,
                            senha=generate_password_hash(senha))
            db.session.add(new_user)
            db.session.commit()

            return make_response(
                jsonify(
                    message="Usuário criado.",
                    status=200
                )
            )
