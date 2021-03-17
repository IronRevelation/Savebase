from flask import Flask
from utils import get_frontend_path
from flask_pymongo import PyMongo
import os
from dotenv import load_dotenv
app = Flask(__name__, static_folder=get_frontend_path(""), static_url_path='')

load_dotenv()

app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
mongo = PyMongo(app)
users = mongo.db.Users

@app.route('/')
def home():
    return app.send_static_file('index.html')


if __name__=='__main__':
    app.run()
