from flask import Blueprint, render_template, request, flash, make_response, jsonify
from .models import Grupo
from . import db
import json
import datetime

views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        data = request.json

        titulo = data['titulo']
        descricao = data['descricao']
        minUserRanking = data['minUserRanking']
        daysOfWeek = data['daysOfWeek']
        horaInicio = data['horaInicio']
        horaFim = data['horaFim']
        discordLink = data['discordLink']
        user_id = data['discordLink']

        try:
            new_grupo = Grupo(titulo=titulo, descricao=descricao, minUserRanking=minUserRanking,
                              daysOfWeek=daysOfWeek, horaInicio=horaInicio, horaFim=horaFim, discordLink=discordLink)

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
    else:
        grupos = Grupo.query.order_by(Grupo.dataCriacao).all()

        print(grupos)

        return make_response(
            jsonify(
                message=grupos,
                status=200
            )
        )
