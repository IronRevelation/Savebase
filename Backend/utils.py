import os

def get_frontend_path(filename):
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + "\\Frontend\\"+filename