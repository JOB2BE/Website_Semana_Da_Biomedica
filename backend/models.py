from uuid import UUID
from typing import Optional, List 
from pydantic import BaseModel, EmailStr, SecretStr  # Pydantic is a python library for data validation, usefull for steps related to PUT requests, checks if we are storing GOOD data
from enum import Enum
from uuid import UUID, uuid4

class Department(Enum):
    """Docstring for MyEnum."""
    tech = 'Tech'
    logistics = 'Logistics'
    media = 'Media'
    partnerships = 'Partnerships'
    design = 'design'
    research = 'research'
    presidency = 'presidency'

class TypeOfUser(Enum):
    """Docstring for MyEnum."""
    admin = 'admin'
    superuser = 'superuser'
    user = 'user'


class Roles(Enum):
    """Docstring for MyEnum."""
    typeOfUser =  TypeOfUser
    colaborator = 'colaborator'
    department = Department
    


class User(BaseModel):
    id = uuid4()
    name = str
    username: str
    email: EmailStr
    password: SecretStr
    university: Optional[str]
    degree: Optional[str]
    roles: list[Roles]
    profileImage: Optional[str]


class Speaker(BaseModel):
    name: str
    linkedUser:Optional[User]
    role: str
    profileImage: str
    companyImage: str
    
    

        

     