from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from . import crud, models, pydanticSchemas
from .database import SessionLocal, engine


# way create the database tables

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Our dependency will create a new SQLAlchemy SessionLocal that will be used in a single request, and then close it once the request is finished.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/") ## Path of the get method, used in browser or by our UI frontend lib

def root():
    return {'Hello':'World'}


#### Get data for validation, it comes from pydantic data extraction in crud.py
## Show 'get' all users

@app.get('/api/users', response_model=pydanticSchemas.UserCreate)
async def fetchUsers(db: Session = Depends(get_db), skip: int = 0, limit: int = 100,):

    users=crud.getUsers(db,skip,limit)
    return users
#DONE

## Add new users
@app.post('/api/users', response_model=pydanticSchemas.UserCreate)
async def registerUser(user:pydanticSchemas.UserCreate, db: Session = Depends(get_db)):

    if crud.getUserByEmail(db, user.email):
        raise HTTPException(status_code=400, detail="Email already in use")
    else:
        return crud.createUser(db, user)
#DONE

## Delete user
@app.delete("/api/users/{userID}", response_model=pydanticSchemas.UserCreate)
async def deleteUser(userID: UUID, db: Session = Depends(get_db)):
    if not crud.getUser(db, userID) :
        raise HTTPException(
            status_code= 404,
            detail=f"User with the id:{userID} does not exist"
        ) #raise exceptions
    else:
        return crud.deleteUser(db, userID)
    
#DONE

@app.put("/api/users/{userID}", response_model=pydanticSchemas.UserCreate)    
async def updateUser(user: pydanticSchemas.User, newParams: dict, db: Session = Depends(get_db)):
    if not crud.getUser(db, user.id) :
        raise HTTPException(
            status_code= 404,
            detail=f"User with the id:{user.id} does not exist"
        ) #raise exceptions
    else:
        return crud.updateUser(db, user, newParams)

#DONE


## Show all speakers

@app.get('/api/speakers', response_model=pydanticSchemas.Speaker)
async def fetchSpeakers(db: Session = Depends(get_db)):
    return crud.getSpeakers(db) ## Retreive all speakers from db

## Add new speakers
@app.post('/api/speakers', response_model=pydanticSchemas.Speaker)
async def registerSpeaker(speaker:pydanticSchemas.Speaker, db: Session = Depends(get_db)):

    if crud.getSpeakersByName(db, speaker.name):
        raise HTTPException(status_code=400, detail="The Speaker with such name is already present in the database")
    
    else:

        return crud.createSpeaker(db,speaker)
    
#DONE

## Delete speaker
@app.delete("/api/speakers/{name}", response_model=pydanticSchemas.Speaker)
async def deleteSpeaker(speakerID, db: Session = Depends(get_db)):

    if crud.getSpeaker(db,speakerID):
        raise HTTPException(
            status_code= 404,
            detail=f"Speaker with the id:{speakerID} does not exist"
        ) #raise exceptions
    else:
        return crud.deleteSpeaker(db,speakerID)
    
#DONE

# Activity

## Show all activities

@app.get('/api/activities', response_model=pydanticSchemas.CreateActivity)
async def fetchActivities(db: Session = Depends(get_db)):
    return crud.getActivities(db) ## Retreive all speakers from db


## Add new activity

@app.post('/api/activities', response_model=pydanticSchemas.CreateActivity)
async def registerSpeaker(activity:pydanticSchemas.CreateActivity, db: Session = Depends(get_db)):

    if crud.getActivityByName(db, activity.name):
        raise HTTPException(status_code=400, detail="An activity with such name is already present in the database")
    
    else:

        return crud.createActivity(db,activity)

## Change slots in activity

## Update activity

@app.put("/api/users/{userID}", response_model=pydanticSchemas.updateActivity)    
async def updateUser(activity: pydanticSchemas.updateActivity, newParams: dict, db: Session = Depends(get_db)):
    if not crud.getUser(db, activity.id) :
        raise HTTPException(
            status_code= 404,
            detail=f"Activity with the id:{user.id} does not exist"
        ) #raise exceptions
    else:
        return crud.updateActivity(db, activity, newParams)

## Delete activity

@app.delete("/api/activities/{activityID}", response_model=pydanticSchemas.CreateActivity)
async def deleteSpeaker(activityID, db: Session = Depends(get_db)):

    if crud.getSpeaker(db,activityID):
        raise HTTPException(
            status_code= 404,
            detail=f"Activity with the id:{activityID} does not exist"
        ) #raise exceptions
    else:
        return crud.deleteActivity(db,activityID)
        





