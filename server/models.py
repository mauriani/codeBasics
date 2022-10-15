from . import db
from sqlalchemy.sql import func
from sqlalchemy import Column
from sqlalchemy import Table
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    senha = db.Column(db.String(150))
    ranking = db.Column(db.Float, default=3.0)
    salas = db.relationship('Grupo', backref='user')


class Grupo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(150))
    descricao = db.Column(db.String(1000))
    minUserRanking = db.Column(db.Float)
    daysOfWeek = db.Column(db.String(50))
    horaInicio = db.Column(db.String(25))
    horaFim = db.Column(db.String(25))
    discordLink = db.Column(db.String(250))
    dataCriacao = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
