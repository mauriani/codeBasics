from flask import Blueprint, render_template, request, flash, make_response, jsonify
from .models import User, Grupo, Nota
from . import db
from .query import getGrupoById, getAllGrupos, getAllGruposByUser, getNotasByUserId, getUserById
from .custom_exception import CustomError

routes = Blueprint('routes', __name__)


@routes.route('/grupo', methods=['GET', 'POST', 'DELETE'])
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
    elif request.method == 'GET':
        try:
            data = request.json
            grupo_id = data['grupo_id']

            grupo = getGrupoById(grupo_id)

            if grupo is None:
                raise CustomError('Grupo não encontrado', 401)

            return make_response(
                jsonify(
                    grupo=grupo,
                    status=200
                )
            )

        except CustomError as error:
            return make_response(
                jsonify(
                    message=error.message,
                    status=401
                )
            )

    # APAGAR UM DETERMINADO GRUPO
    else:
        try:
            data = request.json
            grupo_id = data['grupo_id']

            grupo = Grupo.query.filter_by(id=grupo_id).first()

            if grupo is None:
                raise CustomError('Grupo não encontrado', 401)

            db.session.delete(grupo)
            db.session.commit()

            return make_response(
                jsonify(
                    message="Grupo apagado",
                    status=200
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


@routes.route('/participante', methods=['POST', 'DELETE'])
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
    if request.method == 'DELETE':
        try:
            data = request.json

            user_id = data['user_id']
            grupo_id = data['grupo_id']

            user = User.query.filter_by(id=user_id).first()
            grupo = Grupo.query.filter_by(id=grupo_id).first()

            # Veficando se existe usuário e grupo com os id's informados
            if user is None or grupo is None:
                raise CustomError("Usuário e/ou grupo inválidos.", 401)

            user.grupos.remove(grupo)
            db.session.commit()

            return make_response(
                jsonify(
                    message="Usuário removido",
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
                    status=500
                )
            )


@routes.route('/avaliar', methods=['POST'])
def avaliar():
    try:
        if request.method == 'POST':
            data = request.json

            user_id = data['user_id']
            avaliador_id = data['avaliador_id']
            nota = data['nota']

            if nota > 5 or nota < 0:
                raise CustomError('Nota inválida', 401)

            user = User.query.filter_by(id=user_id).first()
            avaliador = User.query.filter_by(id=user_id).first()

            if user is None or avaliador is None:
                raise CustomError('Usuário e/ou avaliador não existem', 401)

            new_nota = Nota(user_id=user_id,
                            avaliador_id=avaliador_id, nota=nota)

            db.session.add(new_nota)
            db.session.commit()

            notas_list = getNotasByUserId(user_id)

            if len(notas_list) > 0:

                # Adicionando a nota inicial do usuário na soma
                soma = 3

                for nota in notas_list:
                    nt = notas_list[nota]

                    soma = soma + nt['nota']

                media = soma / (float(len(notas_list)) + 1)

                if media > 5:
                    user.ranking = 5
                elif media < 0:
                    user.ranking = 0
                else:
                    user.ranking = media

                db.session.commit()

                return make_response(
                    jsonify(
                        message='Avaliação realizada',
                        status=200
                    )
                )

            raise CustomError('Falha ao realizar a avaliação', 500)

    except CustomError as error:
        return make_response(
            jsonify(
                message=error.message,
                status=error.status
            )
        )
