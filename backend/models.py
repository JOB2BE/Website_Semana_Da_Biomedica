from database import Base
from typing import List
from sqlalchemy import Table, Column, ForeignKey, Integer, String, ARRAY
from sqlalchemy.orm import relationship, Mapped
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.hybrid import hybrid_property



association_table = Table(
    "association_table",
    Base.metadata,
    Column("users", ForeignKey("users.id")),
    Column("activities", ForeignKey("activities.id")),
)

class Activity(Base):
    __tablename__ = "activities"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    requirements = Column(String)
    scheduleAndLocation = Column(String)
    image = Column(String, required=False)
    slots = Column(Integer)
    activityType = Column(String)


    speaker = relationship("speakers", back_populates="activity")



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



    enrolledActivities: Mapped[List[Activity]] = relationship(secondary=association_table)

    


    @hybrid_property
    def univerityAndDegree(self):
        return self.university + " " + self.degree


class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True, required=False)
    position = Column(String,  required=False)
    profileImage = Column(String, required=False)
    companyImage = Column(String,  required=False)
    description = Column(String,  required=False)
    contacts = Column(String,  required=False)
    researchInterests = Column(String,  required=False)
    typeOfSpeaker = Column(String)
   
    activity = relationship("activities", back_populates="speaker")

