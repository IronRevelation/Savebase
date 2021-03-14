from flask import Flask
from utils import get_frontend_path
app = Flask(__name__, static_folder=get_frontend_path(""), static_url_path='')

@app.route('/')
def home():
    return app.send_static_file('index.html')


if __name__=='__main__':
    app.run()
