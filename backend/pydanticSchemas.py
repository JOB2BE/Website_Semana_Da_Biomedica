from typing import List, Optional, Union 
from pydantic import BaseModel, EmailStr, validator  # Pydantic is a python library for data validation, usefull for steps related to PUT requests, checks if we are storing GOOD data
from enum import Enum
from sqlmodel import Field
from fastapi import File


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Union[str, None] = None

class Department(str, Enum):
    """Docstring for MyEnum."""
    tech = 'tech'
    logistics = 'logistics'
    media = 'media'
    partnerships = 'partnerships'
    design = 'design'
    research = 'research'
    presidency = 'presidency'

class TypeOfUser(str, Enum):
    """Docstring for MyEnum."""
    admin = 'admin'
    technician = 'technician'
    colaborator = 'colaborator'
    user = 'user'

class TypeOfSpeaker(str, Enum):
    speaker = 'Speaker'
    moderator = 'Moderator'
    workshop = 'Workshop Giver'
    alumni = 'Alumni'
    institutional = 'Intitutional partner Company'
    gold = 'Gold partner Company'
    basic = 'Basic Partner Company'
    cattering = 'Cattering Partner Company'

class ActivityType(str, Enum):
    other = 'Other'
    lecture = 'Lecture'
    workshop = 'Workshop'

class Activity(BaseModel):

    name: str
    description: str
    requirements: Optional[str]
    scheduleAndLocation: str


    class Config:
        orm_mode = True

class Speaker(BaseModel):

    name: str
    position: Optional[str]
 
    description: Optional[str]
    contacts: Optional[str]
    researchInterests: Optional[str]
    typeOfSpeaker: str
  
    

    class Config:
        orm_mode = True




class User(BaseModel):
    name : str
    email: EmailStr
    university: Optional[str]
    degree: Optional[str]
    typeOfUser: Optional[str] = TypeOfUser.user
    department: Optional[str]
 
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]



    class Config:
        orm_mode = True


class CreateUser(User):
    password:str
    class Config:
        orm_mode = True

class CreateActivity(Activity):
    activityType: str
    slots: int
    enrolledUsers: Optional[List["User"]] = []
    usersInQueue: Optional[List["User"]] = []
    speakers: Optional[List["Speaker"]] = []

    class Config:
        orm_mode = True


class CreateSpeaker(Speaker):

    activities: Optional[List["Activity"]] = []

    class Config:
        orm_mode = True
    

class UserUpdate(User):
    name : Optional[str]
    email: Optional[EmailStr]
    password: Optional[str]
    university: Optional[str]
    typeOfUser: Optional[str]
    department: Optional[str]
    degree: Optional[str]
 
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]
    enrolledActivities: Optional[List["Activity"]] = []
    inQueueActivities: Optional[List["Activity"]] = []

    class Config:
        orm_mode = True

class UserOptionalView(User):
    id: Optional[int]
    name : Optional[str]
    email: Optional[EmailStr]
    university: Optional[str]
    typeOfUser: Optional[str]
    department: Optional[str]
    degree: Optional[str]
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]

    class Config:
        orm_mode = True
    
class updateActivity(CreateActivity):

    name: Optional[str]
    description: Optional[str]
    requirements: Optional[str]
    scheduleAndLocation: Optional[str]
    activityType: Optional[str]
    slots: Optional[int]
    enrolledUsers: Optional[List["User"]] = []
    usersInQueue: Optional[List["User"]] = []
    speakers: Optional[List["Speaker"]] = []

    class Config:
        orm_mode = True

class ActivityOptionalView(Activity):
    
    id: Optional[int] = Field(default=None, primary_key=True)
    name: Optional[str]
    description: Optional[str]
    requirements: Optional[str]
    scheduleAndLocation: Optional[str]
    activityType: Optional[str]
    slots: Optional[int]

    class Config:
        orm_mode = True

class SpeakerUpdate(Speaker):
    name: Optional[int] = Field(default=None, primary_key=True)
    position: Optional[str]
    description: Optional[str]
    contacts: Optional[str]
    researchInterests: Optional[str]
    typeOfSpeaker: Optional[str]
    activities:Optional[List["Activity"]]
    class Config:
        orm_mode = True

class SpeakerOptionalView(Speaker):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: Optional[str]
    position: Optional[str]
    description: Optional[str]
    contacts: Optional[str]
    researchInterests: Optional[str]
    typeOfSpeaker: Optional[str]

    class Config:
        orm_mode = True


class SpeakerGet(SpeakerOptionalView):
    activities: Optional[List[ActivityOptionalView]] = []

    class Config:
        orm_mode = True


class ActivityGet(ActivityOptionalView):
    enrolledUsers: Optional[List[UserOptionalView]]
    usersInQueue: Optional[List[UserOptionalView]]
    speakers: Optional[List[SpeakerOptionalView]]


class UserGet(UserOptionalView):

    enrolledActivities: Optional[List[ActivityOptionalView]] = []
    inQueueActivities: Optional[List[ActivityOptionalView]] = []

    class Config:
        orm_mode = True





    
    

        

     