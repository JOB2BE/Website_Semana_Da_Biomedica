from fastapi import FastAPI
from models import User, Speaker

app = FastAPI()


@app.get("/") ## Path of the get method, used in browser or by our UI frontend lib

def root():
    return {'Hello':'World'}



## Show 'get' all users

@app.get('/api/users')
async def fetchUsers():
    return ## Retreive all speakers from db


@app.post('/api/users')
async def registerUser(user:User):
    ## Add to db
    return {'id': user.id}


## Show all speakers

@app.get('/api/speakers')
async def fetchSpeakers():
    return ## Retreive all speakers from db


@app.post('/api/speakers')
async def registerSpeaker(speaker:Speaker):
    ## Add to db
    return {'id': speaker.name}






