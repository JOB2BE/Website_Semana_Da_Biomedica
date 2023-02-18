from uuid import UUID
from typing import List, Optional 
from pydantic import BaseModel, EmailStr, SecretStr  # Pydantic is a python library for data validation, usefull for steps related to PUT requests, checks if we are storing GOOD data
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
    

class Speaker(BaseModel):
    id : Optional[UUID] = uuid4()
    name: str
    position: str
    profileImage: str
    companyImage: str
    description: str
    contacts: str
    researchInterests: str
    

    class Config:
        orm_mode = True

class User(BaseModel):
    id : Optional[UUID] = uuid4()
    name : str
    email: EmailStr
    university: Optional[str]
    degree: Optional[str]
    roles: List[Roles]
    profileImage: Optional[str]
    speaker: Optional[Speaker]
    description: Optional[str]
    contacts:  Optional[str]
    researchInterests:  Optional[str]
    cv: Optional[str]


    class Config:
        orm_mode = True

class UserCreate(User):
    password: SecretStr



    
    

        

     