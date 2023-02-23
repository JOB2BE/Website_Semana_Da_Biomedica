from sqlalchemy.orm import Session
import models
import pydanticSchemas


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
    return db.query(models.Activity).filter(models.Activity.id == activityID).first()

def getActivityByName(db: Session, name:str):
    return db.query(models.Activity).filter(models.Activity.name == name).all()

def getActivities(db: Session):
    return db.query(models.Activity).all()



def createUser(db: Session, object: pydanticSchemas.UserCreate):
     ## Fix this, lack of security must be hashed
    dbUser = models.User(
        id=object.id,
        name =  object.name,
        email =  object.email,
        password = object.password,
        university =  object.email,
        degree =  object.degree,
        department = object.department,
        typeOfUser = object.typeOfUser,
        profileImage =  object.profileImage,
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
    
    dbSpeaker = models.Speaker(
        id=object.id,
        name =  object.name,
        email =  object.email,
        position =  object.position,
        profileImage =  object.profileImage,
        companyImage =  object.companyImage,
        description =  object.description,
        contacts =  object.contacts,
        researchInterests =  object.researchInterests,
        activities = object.activities,
        typeOfSpeaker = object.typeOfSpeaker,
        )
    db.add(dbSpeaker)
    db.commit()
    db.refresh(dbSpeaker)
    return dbSpeaker


def createActivity(db: Session, object: pydanticSchemas.CreateActivity):
    
    dbActivity = models.Activity(
        id=object.id,
        name = object.name,
        description = object.description,
        requirements = object.requirements,
        scheduleAndLocation = object.scheduleAndLocation,
        image = object.image,
        speakers=object.speakers,
        slots=object.slots,
        activityType = object.activityType,
        )
    
    db.add(dbActivity)
    db.commit()
    db.refresh(dbActivity)
    return dbActivity


def deleteUser(db: Session, userID: str):
    user = db.query(models.User).filter(models.User.id == userID).first()
    db.delete(user)
    db.commit()
    return user

def deleteSpeaker(db: Session, speakerID: str):
    speaker = db.query(models.Speaker).filter(models.Speaker.id == speakerID).first()
    db.delete(speaker)
    db.commit()
    return speaker

def deleteActivity(db: Session, activityID: str):
    activity = db.query(models.Activity).filter(models.Activity.id == activityID).first()
    db.delete(activity)
    db.commit()
    return activity


def updateUser(db: Session, user: pydanticSchemas.UserUpdate, newParams: dict):
    
    for key, value in newParams:
        setattr(user, key, value)

    db.commit()



def updateActivity(db: Session, activity: pydanticSchemas.updateActivity, newParams: dict):
    
    for key, value in newParams:
        setattr(activity, key, value)

    db.commit()



## Bad way to update DB

# def decreaseSlot(db: Session, activityID):
#     activity = getActivity(db,activityID)
#     slots= activity.slots
#     slots = slots - 1
#     activity = models.Activity(slots=slots, **activity.dict())
#     db.add(activity)
#     db.commit()
#     db.refresh(activity)

# def increaseSlot(db: Session, activityID):
#     activity = getActivity(db,activityID)
#     slots= activity.slots
#     slots = slots + 1
#     activity = models.Activity(slots=slots, **activity.dict())
#     db.add(activity)
#     db.commit()
#     db.refresh(activity)

def changeInActivityEnrollment(db: Session, activity: pydanticSchemas.updateActivity, user: pydanticSchemas.UserUpdate):
    

    if activity in user.enrolledActivities:

        activities = user.enrolledActivities.remove(activity) ## new class atributes
        enrolledUsers = activity.enrolledUsers.remove(user)
        setattr(user, 'enrolledActivities', activities) #Update User
        setattr(activity, 'enrolledUsers', enrolledUsers) #Update activity
        setattr(activity, 'slots', models.Activity.slots - 1)
        
        db.commit() # Updating the changes in the database



    else:
        if activity.slots > 0:

            activities = user.enrolledActivities.append(activity) ## new class atributes
            enrolledUsers = activity.enrolledUsers.append(user)
            setattr(user, 'enrolledActivities', activities) #Update User
            setattr(activity, 'enrolledUsers', enrolledUsers) #Update activity
            setattr(activity, 'slots', models.Activity.slots + 1)
            
            db.commit() # Updating the changes in the database
        
        else:

            # Add to on queue list
            queue = activity.usersInQueue.append(user)
            setattr(activity, 'usersInQueue', queue) #Update activity

            db.commit()

