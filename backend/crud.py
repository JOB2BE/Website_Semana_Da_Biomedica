from sqlalchemy.orm import Session
from .models import *
from .pydanticSchemas import *


def getUser(db: Session, userID):
    return db.query(models.User).filter(models.User.id == userID).first()

def getUserByEmail(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def getUserByRole(db: Session, role: str): # Get all Users by a role, in the role list
    return db.query(models.User).filter(any(element in role for element in models.User.roles)).all()


def getUsers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()





def getSpeaker(db: Session, speakerID):
    return db.query(models.Speaker).filter(models.Speaker.id == speakerID).first()

def getSpeakersByName(db: Session, name:str):
    return db.query(models.Speaker).filter(models.Speaker.name == name).first()

def getSpeakers(db: Session):
    return db.query(models.Speaker).all()





def getActivity(db: Session, activityID):
    return db.query(models.Activity).filter(models.Activity.id == activityID).first()

def getActivityByName(db: Session, name:str):
    return db.query(models.Activity).filter(models.Activity.name == name).first()

def getActivities(db: Session):
    return db.query(models.Activity).all()



def createUser(db: Session, object: pydanticSchemas.CreateUser, hasher):
     ## Fix this, lack of security must be hashed
    dbUser = models.User(
        name =  object.name,
        email =  object.email,
        password = hasher,
        university =  object.university,
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


def createSpeaker(db: Session, object:pydanticSchemas.CreateSpeaker):
    
    dbSpeaker = models.Speaker(

        name =  object.name,
        email =  object.email,
        position =  object.position,
        profileImage =  object.profileImage,
        companyImage =  object.companyImage,
        description =  object.description,
        contacts =  object.contacts,
        researchInterests =  object.researchInterests,
        activities=object.activities,
        typeOfSpeaker = object.typeOfSpeaker,
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
        image = object.image,
        speakers=object.speakers,
        slots=object.slots,
        activityType = object.activityType,
        enrolledUsers=object.enrolledUsers,
        usersInQueue=object.usersInQueue
        )
    
    db.add(dbActivity)
    db.commit()
    db.refresh(dbActivity)
    return dbActivity


def deleteUser(db: Session, userID: int):   
    
    if (db.query(models.Activity).all()):
        activitiesOfInterestEnrolled = db.query(models.Activity).filter(models.Activity.enrolledUsers.count(userID) > 0).all()
        activitiesOfInterestQueue = db.query(models.Activity).filter(models.Activity.usersInQueue.count(userID) > 0).all()
    
        for (activityEnrolled, activityQueue) in zip(activitiesOfInterestEnrolled, activitiesOfInterestQueue):
            users = activityEnrolled.enrolledUsers
            queue = activityQueue.usersInQueue
            users.remove(userID)
            queue.remove(userID)

            setattr(activityEnrolled, 'enrolledUsers', users)
            setattr(activityQueue, 'usersInQueue', queue)
            db.flush()

    user = db.query(models.User).filter(models.User.id == userID).first()
    db.delete(user)
    db.commit()
    return user

def deleteSpeaker(db: Session, speakerID: int):
        
    if (db.query(models.Activity).all()):
        activitiesOfInterest = db.query(models.Activity).filter(models.Activity.speakers.any(speakerID)).all()
        
        
        for activity in activitiesOfInterest:

            newSpeakers = activity.speakers
            newSpeakers.remove(int(speakerID))
            print(newSpeakers)
            print("\n \n")

            setattr(activity, 'speakers', newSpeakers)
            db.flush()
        
        db.commit()

        
    speaker = db.query(models.Speaker).filter(models.Speaker.id == speakerID).first()
    # db.delete(speaker)
    # db.commit()
    return speaker

def deleteActivity(db: Session, activityID: int):

    if (db.query(models.User).all()):
        usersOfInterest = db.query(models.User).filter(
            models.User.enrolledActivities.count(activityID) > 0).all()
        
        for user in usersOfInterest:
            activities = user.enrolledActivities
            activities.remove(activityID)
            setattr(user, 'enrolledActivities', activities)
            db.flush()
    
    if (db.query(models.Speaker).all()):
        speakersOfInterest = db.query(models.Speaker).filter(
            models.Speaker.activities.count(activityID) > 0).all()
        
        for  speaker in speakersOfInterest:

            speakerActivities = speaker.activities
            speakerActivities.remove(activityID)
            setattr(speaker, 'activities',
                    speakerActivities)
            db.flush()


    activity = db.query(models.Activity).filter(models.Activity.id == activityID).first()
    db.delete(activity)
    db.commit()
    return activity


def updateUser(db: Session, user: pydanticSchemas.UserUpdate, newParams: dict):
    
    for key, value in newParams.items():
        setattr(user, key, value)

    db.commit()
    return user


def updateSpeaker(db: Session, speaker: pydanticSchemas.Speaker, newParams: dict):

    for key, value in newParams.items():
        setattr(speaker, key, value)

    db.commit()
    return speaker



def updateActivity(db: Session, activity: pydanticSchemas.updateActivity, newParams: dict):
    
    for key, value in newParams.items():
        setattr(activity, key, value)

    db.commit()
    return activity


def deleteUser(db: Session, userID: int):

    # if (db.query(models.Activity).all()):
    #     activitiesOfInterestEnrolled = db.query(models.Activity).filter(
    #         models.Activity.enrolledUsers.count(userID) > 0).all()
    #     activitiesOfInterestQueue = db.query(models.Activity).filter(
    #         models.Activity.usersInQueue.count(userID) > 0).all()

    #     for (activityEnrolled, activityQueue) in zip(activitiesOfInterestEnrolled, activitiesOfInterestQueue):
    #         users = activityEnrolled.enrolledUsers
    #         queue = activityQueue.usersInQueue
    #         users.remove(userID)
    #         queue.remove(userID)

    #         setattr(activityEnrolled, 'enrolledUsers', users)
    #         setattr(activityQueue, 'usersInQueue', queue)
    #         db.flush()

    user = db.query(models.User).filter(models.User.id == userID).first()
    db.delete(user)
    db.commit()
    return user


def deleteSpeaker(db: Session, speakerID: int):

    # if (db.query(models.Activity).all()):
    #     activitiesOfInterest = db.query(models.Activity).filter(
    #         models.Activity.speakers.any(speakerID)).all()

    #     for activity in activitiesOfInterest:

    #         newSpeakers = activity.speakers
    #         newSpeakers.remove(int(speakerID))
            
    #         print(newSpeakers[0:1])

    #         setattr(activity, "speakers", list(newSpeakers))
    #     db.commit()

            
            

    speaker = db.query(models.Speaker).filter(
        models.Speaker.id == speakerID).first()
    db.delete(speaker)
    db.commit()
    return speaker


def deleteActivity(db: Session, activityID: int):

    # if (db.query(models.User).all()):
    #     usersOfInterest = db.query(models.User).filter(
    #         models.User.enrolledActivities.count(activityID) > 0).all()

    #     for user in usersOfInterest:
    #         activities = user.enrolledActivities
    #         activities.remove(activityID)
    #         setattr(user, 'enrolledActivities', activities)
    #         db.flush()

    # if (db.query(models.Speaker).all()):
    #     speakersOfInterest = db.query(models.Speaker).filter(
    #         models.Speaker.activities.count(activityID) > 0).all()

    #     for speaker in speakersOfInterest:

    #         speakerActivities = speaker.activities
    #         speakerActivities.remove(activityID)
    #         setattr(speaker, 'activities',
    #                 speakerActivities)
    #         db.flush()

    activity = db.query(models.Activity).filter(
        models.Activity.id == activityID).first()
    db.delete(activity)
    db.commit()
    return activity



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
    token = True


    if activity in user.inQueueActivities:
        
        queue = activity.usersInQueue
        queue.remove(user)
        # Add to on queue list
        setattr(activity, 'usersInQueue', queue)  # Update activity
        db.flush()
        db.refresh(activity)
        db.refresh(user)
        token = False

    if activity in user.enrolledActivities:
        activities = user.enrolledActivities
        activities.remove(activity) ## new class atributes
        # enrolledUsers = activity.enrolledUsers
        # enrolledUsers.remove(user)

        setattr(user, 'enrolledActivities', activities) 
        #Update User This also deletes the info in the activity table, in the atribute related to enrolledActivities, enrolledUsers

        setattr(activity, 'slots', models.Activity.slots + 1)
        
        db.flush() # Updating the changes in the database
        db.refresh(activity)
        db.refresh(user)
        token = False



        # add those in queue first
    if activity.slots > 0 and len(activity.usersInQueue) > 0:


        userToAdd = activity.usersInQueue[0]
        enrolledUsers = activity.enrolledUsers
        enrolledUsers = enrolledUsers + [userToAdd]
        userQueue = activity.usersInQueue
        userQueue.remove(userToAdd)
        # for userRemove in queueToAdd:
        #     userQueue.remove(userRemove)



        setattr(activity, 'enrolledUsers', enrolledUsers)
        setattr(activity, 'usersInQueue', userQueue)
        setattr(activity, 'slots', activity.slots - 1)

        db.flush()
        db.refresh(activity)
        db.refresh(user)

    elif (token and activity.slots > 0):
        activities = user.enrolledActivities
        activities = activities + [activity]  # new class atributes
        setattr(user, 'enrolledActivities', activities) #Update User This also changes the corresponding atribute in Activity
        setattr(activity, 'slots', models.Activity.slots - 1)
        db.flush()
        db.refresh(activity)
        db.refresh(user)
        

    
    elif(token):

        queue = activity.usersInQueue
        # Add to on queue list
        setattr(activity, 'usersInQueue',
                queue + [user])  # Update activity
    
        db.flush()


    db.commit()
