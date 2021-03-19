from flask_login import UserMixin
from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

mongo = MongoClient(os.environ.get("MONGO_URI"))
users = mongo.Data.Users


class User(UserMixin):
    def __init__(self, id_, money_):
        self.id = id_
        self.money = money_

    
    @staticmethod
    def get(user_id):
        user = users.find_one({'id':user_id})
        if not user:
            return None

        user = User(user['id'], user['money'])
        return user

    @staticmethod
    def create(id_):
        users.insert_one({'id':id_, 'money':[]})

    def add_money(self, m):
        users.update_one({'id':self.id}, {'$push':{'money':m}})
        self.money.append(m)
