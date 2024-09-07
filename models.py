from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Stock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    ticker = db.Column(db.String(10), nullable=False, unique=True)
    price = db.Column(db.Float, nullable=False)
