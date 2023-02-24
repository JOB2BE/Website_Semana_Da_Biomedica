from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login.exceptions import InvalidCredentialsException
from sqlalchemy.orm import Session
from uuid import UUID
import models
import crud
import pydanticSchemas
from database import SessionLocal, engine
from config import settings
from typing import List
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta
from typing import Union



# way create the database tables

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "d95d955aeebc52ea6ba7c4026b906d3784105139a551d15abf39cf91b9e6d2d2"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Our dependency will create a new SQLAlchemy SessionLocal that will be used in a single request, and then close it once the request is finished.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()





def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def authenticate_user(username: str, password: str, db):
    print("\n \n")
    print(db)
    user = crud.getUserByEmail(db=db, email = username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = pydanticSchemas.TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = crud.getUserByEmail(db, email=token_data.username)
    if user is None:
        raise credentials_exception
    return user


@app.post("/token", response_model=pydanticSchemas.Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(username=form_data.username, password=form_data.password, db=db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}







@app.get("/")  # Path of the get method, used in browser or by our UI frontend lib
def root():
    return {'Hello':'World'}


#### Get data for validation, it comes from pydantic data extraction in crud.py
## Show 'get' all users
@app.get("/api/users/me", response_model=pydanticSchemas.UserGet)
async def getUser(current_user: pydanticSchemas.UserGet = Depends(get_current_user)):
    return current_user


@app.get("/api/users/me/enrolledActivities")
async def getUserEnrolledActivities(current_user: pydanticSchemas.UserGet = Depends(get_current_user), db: Session = Depends(get_db)):
    return current_user.enrolledActivities


@app.get("/api/users/me/inQueueActivities")
async def getUserInQueueActivities(current_user: pydanticSchemas.UserGet = Depends(get_current_user), db: Session = Depends(get_db)):
    return current_user.inQueueActivities

@app.get('/api/users', response_model=List[pydanticSchemas.UserGet])
async def fetchUsers(db: Session = Depends(get_db), skip: int = 0, limit: int = 100, token: str = Depends(oauth2_scheme)):

    users=crud.getUsers(db,skip,limit)
    return users
#DONE

## Add new users
@app.post('/api/users', response_model=pydanticSchemas.User)
async def registerUser(user:pydanticSchemas.User, db: Session = Depends(get_db), hasher = Depends(get_password_hash)):

    if crud.getUserByEmail(db, user.email):
        raise HTTPException(status_code=400, detail="Email already in use")
    else:
        return crud.createUser(db, user, hasher)
#DONE


# Get user by id


@app.get('/api/users/{userID}', response_model=pydanticSchemas.UserGet)
async def fetchUser(userID, db: Session = Depends(get_db)):
    user = crud.getUser(db, userID)  # Retreive all speakers from db~

    if not user:
        raise HTTPException(
            status_code=404,
            detail=f"User with the id:{userID} does not exist"
        )  # raise exceptions
    else:
        return user

# DONE


## Delete user
@app.delete("/api/users/{userID}", response_model=pydanticSchemas.User)
async def deleteUser(userID, db: Session = Depends(get_db)):
    if not crud.getUser(db, userID) :
        raise HTTPException(
            status_code= 404,
            detail=f"User with the id:{userID} does not exist"
        ) #raise exceptions
    else:
        
        return crud.deleteUser(db, userID)
    
#DONE

@app.patch("/api/users/{userID}", response_model=pydanticSchemas.UserUpdate)    
async def updateUser(userID, newParams: dict, db: Session = Depends(get_db)):
    user = crud.getUser(db, userID)
    if not user:
        raise HTTPException(
            status_code= 404,
            detail=f"User with the id:{user.id} does not exist"
        ) #raise exceptions
    else:
        return crud.updateUser(db, user, newParams)

#DONE


## Show all speakers


@app.get('/api/speakers', response_model=List[pydanticSchemas.SpeakerGet])
async def fetchSpeakers(db: Session = Depends(get_db)):
    return crud.getSpeakers(db) ## Retreive all speakers from db

# Get speaker by id


@app.get('/api/speakers/{speakerID}', response_model=pydanticSchemas.SpeakerGet)
async def fetchSpeaker(speakerID, db: Session = Depends(get_db)):
    speaker = crud.getSpeaker(db, speakerID)  # Retreive all speakers from db~

    if not speaker:
        raise HTTPException(
            status_code=404,
            detail=f"Speaker with the id:{speakerID} does not exist"
        )  # raise exceptions
    else:
        return speaker

## Add new speakers
@app.post('/api/speakers', response_model=pydanticSchemas.CreateSpeaker)
async def registerSpeaker(speaker: pydanticSchemas.CreateSpeaker, db: Session = Depends(get_db)):

    if crud.getSpeakersByName(db, speaker.name):
        raise HTTPException(status_code=400, detail="The Speaker with such name is already present in the database")
    
    else:

        return crud.createSpeaker(db,speaker)
    
#DONE

## Update Speaker


@app.patch("/api/speakers/{speakerID}", response_model= pydanticSchemas.SpeakerUpdate)
async def updateSpeaker(speakerID, newParams:dict, db: Session = Depends(get_db)):
    speaker = crud.getSpeaker(db, speakerID)
    if not speaker:
        raise HTTPException(
            status_code=404,
            detail=f"Speaker with the id:{speakerID} does not exist"
        )  # raise exceptions
    else:
        return crud.updateSpeaker(db,speaker, newParams)

## Delete speaker
@app.delete("/api/speakers/{speakerID}", response_model=pydanticSchemas.Speaker)
async def deleteSpeaker(speakerID, db: Session = Depends(get_db)):

    if not crud.getSpeaker(db,speakerID):
        raise HTTPException(
            status_code= 404,
            detail=f"Speaker with the id:{speakerID} does not exist"
        ) #raise exceptions
    else:
        return crud.deleteSpeaker(db,speakerID)
    
#DONE

# Activity

## Show all activities


@app.get('/api/activities', response_model=List[pydanticSchemas.ActivityGet])
async def fetchActivities(db: Session = Depends(get_db)):
    return crud.getActivities(db) ## Retreive all speakers from db

#DONE

# Get activity by id


@app.get('/api/activities/{activityID}', response_model=pydanticSchemas.ActivityGet)
async def fetchActivity(activityID,db: Session = Depends(get_db)):
    return crud.getActivity(db,activityID) 

# DONE

## Add new activity

@app.post('/api/activities', response_model=pydanticSchemas.CreateActivity)
async def registerActivity(activity:pydanticSchemas.CreateActivity, db: Session = Depends(get_db)):

    if crud.getActivityByName(db, activity.name):
        raise HTTPException(status_code=400, detail="An activity with such name is already present in the database")
    
    else:

        return crud.createActivity(db,activity)
#DONE

## Update activity

@app.patch("/api/activities/{activityID}", response_model=pydanticSchemas.updateActivity)    
async def updateActivity(activityID, newParams: dict, db: Session = Depends(get_db)):
    
    activity = crud.getActivity(db, activityID)
    if not activity:
        raise HTTPException(
            status_code= 404,
            detail=f"Activity with the id:{activityID} does not exist"
        ) #raise exceptions
    else:
        return crud.updateActivity(db, activity, newParams)
#DONE

## Delete activity

@app.delete("/api/activities/{activityID}", response_model=pydanticSchemas.Activity)
async def deleteActivity(activityID, db: Session = Depends(get_db)):

    if not crud.getActivity(db,activityID):
        raise HTTPException(
            status_code= 404,
            detail=f"Activity with the id:{activityID} does not exist"
        ) #raise exceptions
    else:
        return crud.deleteActivity(db,activityID)
#DONE

# Enrollment

## Enrollment

@app.patch("/api/activities/{activityID}/{userID}")
async def changeInEnrollment(activityID, userID, db: Session = Depends(get_db)):
    user = crud.getUser(db, userID)
    activity = crud.getActivity(db, activityID)
    if not activity or not user:
        raise HTTPException(
            status_code= 404,
            detail=f"Activity or user do not exist"
        ) #raise exceptions
    else:
        crud.changeInActivityEnrollment(db, activity, user)
        db.refresh(user)
        db.refresh(activity)
        return activity, user
    
#DONE


#linker
@app.patch("/linker/{activityID}/{speakerID}")
async def linker(activityID, speakerID, db: Session = Depends(get_db)):

    activity = crud.getActivity(db, activityID)
    speaker = crud.getSpeaker(db, speakerID)
    setattr(activity, 'speakers',  activity.speakers + [speaker])
    setattr(speaker, 'activities', speaker.activities + [activity])
    db.commit()
    db.refresh(speaker)
    db.refresh(activity)

    return activity,speaker





    




