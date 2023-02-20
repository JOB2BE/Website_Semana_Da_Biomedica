from uuid import UUID
from typing import List, Optional 
from pydantic import BaseModel, EmailStr, SecretStr, validator  # Pydantic is a python library for data validation, usefull for steps related to PUT requests, checks if we are storing GOOD data
from enum import Enum
from uuid import UUID, uuid4

class Department(str, Enum):
    """Docstring for MyEnum."""
    tech = 'Tech'
    logistics = 'Logistics'
    media = 'Media'
    partnerships = 'Partnerships'
    design = 'design'
    research = 'research'
    presidency = 'presidency'

class TypeOfUser(str, Enum):
    """Docstring for MyEnum."""
    admin = 'admin'
    technician = 'technician'
    colaborator = 'colaborator'
    user = 'user'


class Roles(str, Enum):
    """Docstring for MyEnum."""
    typeOfUser =  TypeOfUser
    department = Department
    


class Activity(BaseModel):
    id : Optional[UUID] = uuid4()
    name: str
    description: str
    requirements: Optional[str]
    scheduleAndLocation: str
    image: Optional[str]

    class Config:
        orm_mode = True

class Speaker(BaseModel):
    id : Optional[UUID] = uuid4()
    name: str
    email: EmailStr
    position: str
    profileImage: str
    companyImage: str
    description: str
    contacts: str
    researchInterests: str
    activities: List[Activity]
    

    class Config:
        orm_mode = True

class CreateActivity(Activity):
    speaker: Speaker

class updateActivity(CreateActivity):
    slots: int

class User(BaseModel):
    id : Optional[UUID] = uuid4()
    name : str
    email: EmailStr
    university: Optional[str]
    degree: Optional[str]
    roles: List[Roles]
    profileImage: Optional[str]
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]


    class Config:
        orm_mode = True


    @validator('name')
    def name_must_contain_space(cls, v):
        if ' ' not in v:
            raise ValueError('must contain a space')
        return v.title()

    @validator('password2')
    def passwords_match(cls, v, values, **kwargs):
        if 'password1' in values and v != values['password1']:
            raise ValueError('passwords do not match')
        return v

    @validator('username')
    def username_alphanumeric(cls, v):
        assert v.isalnum(), 'must be alphanumeric'
        return v

class UserCreate(User):
    password: SecretStr



    
    

        

     