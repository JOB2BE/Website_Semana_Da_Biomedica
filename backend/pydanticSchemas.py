from uuid import UUID
from typing import List, Optional 
from pydantic import BaseModel, EmailStr, validator  # Pydantic is a python library for data validation, usefull for steps related to PUT requests, checks if we are storing GOOD data
from enum import Enum
from uuid import UUID, uuid4

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
    id : UUID = uuid4()
    name: str
    description: str
    requirements: Optional[str]
    scheduleAndLocation: str
    image: Optional[str]
    enrolledUsers: Optional[List[UUID]] = []
    usersInQueue: Optional[List[UUID]] = []
    speakers: Optional[List[UUID]] = []
    

    class Config:
        orm_mode = True

class Speaker(BaseModel):
    id : UUID = uuid4()
    name: str
    email: Optional[EmailStr]
    position: Optional[str]
    profileImage: Optional[str]
    companyImage: Optional[str]
    description: Optional[str]
    contacts: Optional[str]
    researchInterests: Optional[str]
    typeOfSpeaker: str
    activities: Optional[List[UUID]] = []
    

    class Config:
        orm_mode = True

class CreateActivity(Activity):
    activityType: str
    slots: int
    

class User(BaseModel):
    id : Optional[UUID] = uuid4()
    name : str
    email: EmailStr
    university: Optional[str]
    degree: Optional[str]
    typeOfUser: Optional[str] = TypeOfUser.user
    department: Optional[str]
    profileImage: Optional[str]
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]
    enrolledActivities: Optional[List[UUID]] = []



    class Config:
        orm_mode = True

class UserCreate(User):
    password: str


class UserUpdate(UserCreate):

    id : Optional[UUID] = uuid4()
    name : Optional[str]
    email: Optional[EmailStr]
    password: Optional[str]
    university: Optional[str]
    typeOfUser: Optional[str]
    department: Optional[str]
    degree: Optional[str]
    profileImage: Optional[str]
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]
    enrolledActivities: Optional[List[UUID]] =[] ## Only required after user creation

class updateActivity(CreateActivity):

    id : UUID = uuid4()
    name: Optional[str]
    description: Optional[str]
    requirements: Optional[str]
    scheduleAndLocation: Optional[str]
    image: Optional[str]
    speakers: Optional[List[UUID]]=[]
    activityType: Optional[str]
    slots: Optional[int]
    enrolledUsers: Optional[List[UUID]] = []
    usersInQueue: Optional[List[UUID]] = []



    
    

        

     