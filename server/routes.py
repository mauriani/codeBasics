from csv import excel
from flask import Blueprint, render_template, request, flash, make_response, jsonify
from .models import Grupo
from . import db
import json
import datetime

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
        user_id = data['user_id']

        try:
            new_grupo = Grupo(titulo=titulo, descricao=descricao, minUserRanking=minUserRanking,
                              daysOfWeek=daysOfWeek, horaInicio=horaInicio, horaFim=horaFim, discordLink=discordLink, user_id=user_id)

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
                    status=200
                )
            )
    # RETORNA UM GRUPO ESPECIFICO
    else:
        try:
            data = request.json
            grupo_id = data['id']

            grupo = Grupo.query.filter_by(id=grupo_id).first_or_404()

            if grupo is None:
                raise Exception('Grupo não encontrado')

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

            return make_response(
                jsonify(json_list=grp)
            )

        except Exception as error:
            return make_response(
                jsonify(
                    message=repr(error),
                    status=404
                )
            )


@routes.route('/grupos', methods=['GET'])
# RETORNA TODOS OS GRUPOS
def grupos():
    try:
        grupos = Grupo.query.order_by(Grupo.dataCriacao).all()

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

        return make_response(
            jsonify(json_list=grps)
        )
    except:
        return make_response(
            jsonify(
                message="Erro ao consultar os grupos.",
                status=404
            )
        )
