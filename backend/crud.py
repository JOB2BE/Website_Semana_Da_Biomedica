from sqlalchemy.orm import Session

from . import models, pydanticSchemas


def getUser(db: Session, userID):
    return db.query(models.User).filter(models.User.id == userID).first()

def getUserByEmail(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def getUserByRole(db: Session, role: str): # Get all Users by a role, in the role list
    return db.query(models.User).filter(any(element in role for element in models.User.roles)).first()


def getUsers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()





def getSpeaker(db: Session, speakerID):
    return db.query(models.Speaker).filter(models.Speaker.id == speakerID).first()

def getSpeakersByName(db: Session, name:str):
    return db.query(models.Speaker).filter(models.Speaker.name == name).all()

def getSpeakers(db: Session):
    return db.query(models.Speaker).all()





def getActivity(db: Session, activityID):
    return db.query(models.Speaker).filter(models.Activity.id == activityID).first()

def getActivityByName(db: Session, name:str):
    return db.query(models.Speaker).filter(models.Activity.name == name).all()

def getActivities(db: Session):
    return db.query(models.Activity).all()



def createUser(db: Session, object: pydanticSchemas.UserCreate):
    fake_hashed_password =  object.password + "notreallyhashed" ## Fix this, lack of security must be hashed
    dbUser = models.User(
        name =  object.name,
        email =  object.email,
        password =fake_hashed_password,
        university =  object.email,
        degree =  object.degree,
        roles =  object.roles,
        profileImage =  object.profileImage,
        speaker =  object.speaker,
        description =  object.description,
        contacts =  object.contacts,
        researchInterests =  object.researchInterests,
        cv= object.cv,
        )
    db.add(dbUser)
    db.commit()
    db.refresh(dbUser)
    return dbUser


def createSpeaker(db: Session, object: pydanticSchemas.Speaker):
    
    dbSpeaker = models.User(
        name =  object.name,
        email =  object.email,
        position =  object.position,
        profileImage =  object.profileImage,
        comapanyImage =  object.companyImage,
        description =  object.description,
        contacts =  object.contacts,
        researchInterests =  object.researchInterests,
        )
    db.add(dbSpeaker)
    db.commit()
    db.refresh(dbSpeaker)
    return dbSpeaker


def createActivity(db: Session, object: pydanticSchemas.CreateActivity):
    
    dbActivity = models.Activity(
        name = object.name,
        description = object.description,
        requirements = object.requirements,
        scheduleAndLocation = object.scheduleAndLocation,
        image = object.image)
    
    db.add(dbActivity)
    db.commit()
    db.refresh(dbActivity)
    return dbActivity


def deleteUser(db: Session, userID: str):
    user = db.query(models.User).filter(models.User.id == userID)
    db.delete(user)
    db.commit()
    db.refresh(user)
    return user

def deleteSpeaker(db: Session, speakerID: str):
    speaker = db.query(models.Speaker).filter(models.Speaker.id == speakerID).first()
    db.delete(speaker)
    db.commit()
    db.refresh(speaker)
    return speaker

def deleteActivity(db: Session, activityID: str):
    activity = db.query(models.Activity).filter(models.Activity.id == activityID).first()
    db.delete(activity)
    db.commit()
    db.refresh(activity)
    return activity


def updateUser(db: Session, user: pydanticSchemas.UserCreate, newParams: dict):
    
    user = models.User(**newParams, **user.dict())
    db.add(user)
    db.commit()
    db.refresh(user)


def updateActivity(db: Session, activity: pydanticSchemas.UserCreate, newParams: dict):
    
    activity = models.Activity(**newParams, **activity.dict())
    db.add(activity)
    db.commit()
    db.refresh(activity)

def decreaseSlot(db: Session, activityID, newParams: dict):
    activity = getActivity(db,activityID)
    slots= activity.slots
    slots = slots - 1
    activity = models.Activity(slots=slots, **activity.dict())
    db.add(activity)
    db.commit()
    db.refresh(activity)

def increaseSlot(db: Session, activityID, newParams: dict):
    activity = getActivity(db,activityID)
    slots= activity.slots
    slots = slots + 1
    activity = models.Activity(slots=slots, **activity.dict())
    db.add(activity)
    db.commit()
    db.refresh(activity)

