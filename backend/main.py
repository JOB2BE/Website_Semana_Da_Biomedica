from fastapi import FastAPI, HTTPException
from pydanticSchemas import User, Speaker
from uuid import UUID

app = FastAPI()


@app.get("/") ## Path of the get method, used in browser or by our UI frontend lib

def root():
    return {'Hello':'World'}



## Show 'get' all users

@app.get('/api/users')
async def fetchUsers():
    return ## Retreive all speakers from db

## Add new users
@app.post('/api/users')
async def registerUser(user:User):
    ## Add to db
    return {'id': user.id}

## Delete user
@app.delete("/api/users/{userID}")
async def deleteUser(userID: UUID):
    # for user in db:
    #     if user.id == userID:
    #         db.remove(user)
    #         return
    raise HTTPException(
        status_code= 404,
        detail=f"User with the id:{userID} does not exist"
    ) #raise exceptions
            

## Show all speakers

@app.get('/api/speakers')
async def fetchSpeakers():
    return ## Retreive all speakers from db

## Add new speakers
@app.post('/api/speakers')
async def registerSpeaker(speaker:Speaker):
    ## Add to db
    return {'id': speaker.name}

## Delete speaker
@app.delete("/api/speakers/{name}")
async def deleteUser(name: str):
    # for speaker in db:
    #     if speakr.name == name:
    #         db.remove(speaker)
    #         return

    raise HTTPException(
        status_code= 404,
        detail=f"Speaker with the name:{name} does not exist"
    ) #raise exceptions
        





