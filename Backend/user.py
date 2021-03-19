from flask_login import UserMixin
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import datetime

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
        entry = {"date":datetime.datetime.now().isoformat(), "value":m}
        users.update_one({'id':self.id}, {'$push':{'money':entry}})
        self.money.append(entry)

    def remove_entry(self, i):
        users.update_one({'id':self.id}, {'$pull':{"money":self.money[i]}})
        del self.money[i]
        
    def modify_entry(self,i,m):
        users.update_one({"id": self.id},{'$set':{"money.{}".format(i)+".value":m}})
        self.money[i]["value"]=m
