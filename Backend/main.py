import json
from flask import Flask, render_template, request, url_for, redirect
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


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)



@app.route('/')
def home():
    if current_user.is_authenticated:
        return render_template('index.html', id=current_user.id)
    else:
        return render_template('login.html')


@app.route("/login")
def login():
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
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

    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]     
    else:
        return "User email not available or not verified by Google.", 400

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


if __name__ == '__main__':
    app.run(ssl_context="adhoc")

