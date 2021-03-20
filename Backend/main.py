import json
from flask import Flask, render_template, request, redirect, jsonify, send_from_directory
from flask_login import (LoginManager, current_user, login_required, login_user, logout_user,)
import os
from dotenv import load_dotenv
from user import User

from oauthlib.oauth2 import WebApplicationClient
import requests



app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)

load_dotenv()


login_manager = LoginManager()
login_manager.init_app(app)

GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
GOOGLE_DISCOVERY_URL = ("https://accounts.google.com/.well-known/openid-configuration")

client = WebApplicationClient(GOOGLE_CLIENT_ID)


def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()


@login_manager.unauthorized_handler
def unauthorized():
    return redirect('/')


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

def test():
    print("test")

@app.route('/')
def home():
    if current_user.is_authenticated:
        return redirect("/dashboard")
    else:
        return render_template('login/index.html')

@app.route('/dashboard')
@login_required
def dashboard():
	return render_template("dashboard/index.html", id=current_user.id, money=current_user.money)


@app.route('/static/js/<path:path>')
def serveStaticJS(path):
	return send_from_directory("templates/login/static/js", path)

@app.route("/dashboard/static/js/<path:path>")
def serveStaticDashboardJS(path):
	return send_from_directory("templates/dashboard/static/js", path)


@app.route("/login")
def login():
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid"],
    )
    return redirect(request_uri)


@app.route("/login/callback")
def callback():
    code = request.args.get("code")
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]
    token_url, headers, body = client.prepare_token_request(token_endpoint, authorization_response=request.url, redirect_url=request.base_url, code=code,)
    token_response = requests.post(token_url,headers=headers,data=body,auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),)
    client.parse_request_body_response(json.dumps(token_response.json()))

    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    unique_id = userinfo_response.json()["sub"]

    my_user = User(id_=unique_id, money_=[])

    if not User.get(unique_id):
        User.create(unique_id)

    login_user(my_user)
    return redirect('/')


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect('/')


@app.route("/api/add_money/<float:m>", methods=["POST"])
@login_required
def add_money(m):
    current_user.add_money(m)
    return jsonify(current_user.money)


@app.route("/api/get_money", methods=["GET"])
@login_required
def get_money():
    return jsonify(current_user.money) #da testare


@app.route("/api/remove_money/<int:i>", methods=["POST"])
@login_required
def remove_money(i):
    current_user.remove_entry(i)
    return jsonify(current_user.money)


@app.route("/api/modify_money/<int:i>/<float:m>", methods=["POST"])
@login_required
def modify_money(i,m):
    current_user.modify_entry(i,m)
    return jsonify(current_user.money)


if __name__ == '__main__':
    app.run(ssl_context="adhoc")

