from flask_login import UserMixin
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import datetime
import hashlib

load_dotenv()

mongo = MongoClient(os.environ.get("MONGO_URI"))
users = mongo.Data.Users


def hash_string(s):
    s = str(s)
    s = s.encode()
    return hashlib.sha256(s).hexdigest()


class User(UserMixin):
    def __init__(self, id_, money_, currency_, quota_):
        self.id = id_
        self.money = money_
        self.currency=currency_
        self.quota=quota_
    
    @staticmethod
    def get(user_id):
        user_id = hash_string(user_id)
        user = users.find_one({'id':user_id})
        if not user:
            return None

        user = User(user['id'], user['money'], user['currency'], user['quota'])
        return user


    @staticmethod
    def create(id_):
        id_ = hash_string(id_)
        users.insert_one({'id':id_, 'money':[], 'currency':"€", 'quota':0})


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

    def update_currency(self, c):
        users.update_one({"id": self.id},{'$set':{"currency":c}})
        self.currency=c

    def update_quota(self, q):
        users.update_one({"id": self.id},{'$set':{"quota":q}})
        self.quota=q
