from database import Base

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.hybrid import hybrid_property


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    university = Column(String, required=False)
    degree = Column(String, required=False)
    roles = Column(ARRAY)
    profileImage = Column(String)
    description = Column(String, required=False)
    contacts = Column(String, required=False)
    researchInterests = Column(String, required=False)
    cv = Column(String, required=False)

    

    speaker = relationship("Speaker")

    @hybrid_property
    def univerityAndDegree(self):
        return self.university + " " + self.degree


class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    position = Column(String)
    profileImage = Column(String, required=False)
    companyImage = Column(String)
    description = Column(String)
    contacts = Column(String)
    researchInterests = Column(String)
   
    activity = relationship("Activity", back_populates="speaker")

class Activity(Base):
    __tablename__ = "activities"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    requirements = Column(String)
    scheduleAndLocation = Column(String)
    image = Column(String, required=False)


    speaker = relationship("Speaker", back_populates="activity")


