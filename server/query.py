from flask import jsonify
from flask_sqlalchemy import SQLAlchemy

from .models import User, Grupo


def getUserByEmail(email):
    user = User.query.filter_by(email=email).first()

    if user:
        grupos = {}

        for grupo in user.grupos:
            grupos[grupo.id] = {
                'id': grupo.id,
                'titulo': grupo.titulo,
                'minUserRanking': grupo.minUserRanking,
                'daysOfWeek': grupo.daysOfWeek,
                'horaInicio': grupo.horaInicio,
                'horaFim': grupo.horaFim,
                'discordLink': grupo.discordLink,
                'dataCriacao': grupo.dataCriacao,
                'owner_id': grupo.owner_id,
            }

        usr = {
            'id': user.id,
            'nome': user.nome,
            'email': user.email,
            'senha': user.senha,
            'ranking': user.ranking,
            'grupos': grupos
        }

        return usr
    else:
        return


def getUserById(id):
    user = User.query.filter_by(id=id).first()

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
    grupo = Grupo.query.filter_by(id=id).first()

    participantes = {}

    if grupo:
        for participante in grupo.participantes:
            participantes[participante.id] = {
                'id': participante.id,
                'nome': participante.nome,
                'email': participante.email,
                'ranking': participante.ranking,
            }

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
            'owner_id': grupo.owner_id,
            'participantes': participantes
        }

        return grp
    else:
        return


def getAllGruposByUser(owner_id):
    grupos = Grupo.query.filter_by(owner_id=owner_id).all()

    if grupos:
        grps = {}

        for grupo in grupos:
            participantes = {}

            for participante in grupo.participantes:
                participantes[participante.id] = {
                    'id': participante.id,
                    'nome': participante.nome,
                    'email': participante.email,
                    'ranking': participante.ranking,
                }

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
                'owner_id': grupo.owner_id,
                'participantes': participantes
            }

        return grps
    else:
        return


def getAllGrupos():
    grupos = Grupo.query.order_by(Grupo.dataCriacao).all()

    if grupos:
        grps = {}

        for grupo in grupos:
            participantes = {}

            for participante in grupo.participantes:
                participantes[participante.id] = {
                    'id': participante.id,
                    'nome': participante.nome,
                    'email': participante.email,
                    'ranking': participante.ranking,
                }

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
                'owner_id': grupo.owner_id,
                'participantes': participantes
            }

        return grps
    else:
        return
