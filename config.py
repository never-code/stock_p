import os

class Config:
    SQLALCHEMY_DATABASE_URI ='postgresql://postgres:admin@localhost/stocks_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
