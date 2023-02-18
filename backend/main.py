from fastapi import FastAPI
from models import User, Speaker

app = FastAPI()


@app.get("/") ## Path of the get method, used in browser or by our UI frontend lib

def root():
    return {'Hello':'World'}