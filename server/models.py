from . import db
from sqlalchemy.sql import func

user_grupo = db.Table('user_grupo',
                      db.Column('user_id', db.Integer,
                                db.ForeignKey('user.id')),
                      db.Column('grupo_id', db.Integer,
                                db.ForeignKey('grupo.id'))
                      )


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    senha = db.Column(db.String(150))
    ranking = db.Column(db.Float, default=3.0)
    grupos = db.relationship(
        'Grupo', secondary=user_grupo, backref='participantes')
    owned_grupos = db.relationship('Grupo', backref='owner', lazy=True)


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
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
