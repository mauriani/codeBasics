from flask import Blueprint, render_template, request, flash, make_response, jsonify
from .models import User, Grupo
from . import db
from .query import getGrupoById, getAllGrupos, getAllGruposByUser, getUserById
from .custom_exception import CustomError

routes = Blueprint('routes', __name__)


@routes.route('/grupo', methods=['GET', 'POST'])
def grupo():
    # CRIA UM GRUPO
    if request.method == 'POST':
        data = request.json

        titulo = data['titulo']
        descricao = data['descricao']
        minUserRanking = data['minUserRanking']
        daysOfWeek = data['daysOfWeek']
        horaInicio = data['horaInicio']
        horaFim = data['horaFim']
        discordLink = data['discordLink']
        owner_id = data['owner_id']

        try:
            new_grupo = Grupo(titulo=titulo, descricao=descricao, minUserRanking=minUserRanking,
                              daysOfWeek=daysOfWeek, horaInicio=horaInicio, horaFim=horaFim, discordLink=discordLink, owner_id=owner_id)

            db.session.add(new_grupo)
            db.session.commit()

            return make_response(
                jsonify(
                    message="Grupo criado.",
                    status=200
                )
            )
        except:
            return make_response(
                jsonify(
                    message="Erro ao criar grupo.",
                    status=401
                )
            )
    # RETORNA UM GRUPO ESPECIFICO
    else:
        try:
            data = request.json
            grupo_id = data['id']

            grupo = getGrupoById(grupo_id)

            if grupo is None:
                raise CustomError('Grupo não encontrado', 401)

            return make_response(
                jsonify(
                    grupo=grupo
                )
            )

        except CustomError as error:
            return make_response(
                jsonify(
                    message=error.message,
                    status=401
                )
            )


@routes.route('/grupos', methods=['GET'])
# RETORNA TODOS OS GRUPOS
def grupos():
    try:
        grupos = getAllGrupos()

        return make_response(
            jsonify(grupos=grupos)
        )
    except:
        return make_response(
            jsonify(
                message="Erro ao consultar os grupos.",
                status=401
            )
        )


@routes.route('/participante', methods=['GET', 'POST'])
def participante():
    # ADICIONAR USUARIO A UM GRUPO
    if request.method == 'POST':
        try:
            data = request.json

            user_id = data['user_id']
            grupo_id = data['grupo_id']

            user = User.query.filter_by(id=user_id).first()
            grupo = Grupo.query.filter_by(id=grupo_id).first()

            if user and grupo:
                user.grupos.append(grupo)
                db.session.commit()

                return make_response(
                    jsonify(
                        message="Usuário adicionado ao grupo",
                        status=200
                    )
                )
            else:
                raise CustomError("Usuário e/ou grupo inválido", 401)

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
                    status=500
                )
            )
