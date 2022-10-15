from flask_sqlalchemy import SQLAlchemy
from .models import User, Grupo


def getUserByEmail(email):
    user = User.query.filter_by(email=email).First()

    if user:
        usr = {
            'id': user.id,
            'nome': user.nome,
            'email': user.email,
            'ranking': user.ranking
        }

        return usr
    else:
        return


def getUserById(id):
    user = User.query.filter_by(id=id).First()

    if user:
        usr = {
            'id': user.id,
            'nome': user.nome,
            'email': user.email,
            'ranking': user.ranking
        }

        return usr
    else:
        return


def getGrupoById(id):
    grupo = Grupo.query.filter_by(id=id).First()

    if grupo:
        grp = {
            'id': grupo.id,
            'titulo': grupo.titulo,
            'descricao': grupo.descricao,
            'minUserRanking': grupo.minUserRanking,
            'daysOfWeek': grupo.daysOfWeek,
            'horaInicio': grupo.horaInicio,
            'horaFim': grupo.horaFim,
            'discordLink': grupo.discordLink,
            'dataCriacao': grupo.dataCriacao,
            'user_id': grupo.user_id
        }

        return grp
    else:
        return


def getAllGruposByUser(user_id):
    grupos = Grupo.query.filter_by(user_id=user_id).all()

    if grupos:
        grps = {}

        for grupo in grupos:
            grps[grupo.id] = {
                'id': grupo.id,
                'titulo': grupo.titulo,
                'descricao': grupo.descricao,
                'minUserRanking': grupo.minUserRanking,
                'daysOfWeek': grupo.daysOfWeek,
                'horaInicio': grupo.horaInicio,
                'horaFim': grupo.horaFim,
                'discordLink': grupo.discordLink,
                'dataCriacao': grupo.dataCriacao,
                'user_id': grupo.user_id
            }

        return grps
    else:
        return


def getAllGrupos():
    grupos = Grupo.query.order_by(Grupo.dataCriacao).all()

    if grupos:
        grps = {}

        for grupo in grupos:
            grps[grupo.id] = {
                'id': grupo.id,
                'titulo': grupo.titulo,
                'descricao': grupo.descricao,
                'minUserRanking': grupo.minUserRanking,
                'daysOfWeek': grupo.daysOfWeek,
                'horaInicio': grupo.horaInicio,
                'horaFim': grupo.horaFim,
                'discordLink': grupo.discordLink,
                'dataCriacao': grupo.dataCriacao,
                'user_id': grupo.user_id
            }

        return grps
    else:
        return
