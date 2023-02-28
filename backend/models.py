from database import Base
from typing import List, Optional
from sqlalchemy import Table, Column, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship, Session
# from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.ext.hybrid import hybrid_property
import enum
import crud


enrolled_table = Table(
    "enrolled_table",
    Base.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("activity_id", ForeignKey("activity.id"), primary_key=True),
)

queue_table = Table(
    "queue_table",
    Base.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("activity_id", ForeignKey("activity.id"), primary_key=True),
)

speaker_activity_table = Table(
    "speaker_activity_table",
    Base.metadata,
    Column("speaker_id", ForeignKey("speaker.id"), primary_key=True),
    Column("activity_", ForeignKey("activity.id"), primary_key=True),
)


class Department(enum.Enum):
    """Docstring for MyEnum."""
    tech = 'tech'
    logistics = 'logistics'
    media = 'media'
    partnerships = 'partnerships'
    design = 'design'
    research = 'research'
    presidency = 'presidency'


class TypeOfUser(enum.Enum):
    admin = 'admin'
    technician = 'technician'
    colaborator = 'colaborator'
    user = 'user'




class TypeOfSpeaker(enum.Enum):
    speaker = 'Speaker'
    moderator = 'Moderator'
    workshop = 'Workshop Giver'
    alumni = 'Alumni'
    institutional = 'Intitutional partner Company'
    gold = 'Gold partner Company'
    basic = 'Basic Partner Company'
    cattering = 'Cattering Partner Company'


class ActivityType(enum.Enum):
    other = 'Other'
    lecture = 'Lecture'
    workshop = 'Workshop'




class Activity(Base):
    __tablename__ = "activity"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    requirements = Column(String)
    scheduleAndLocation = Column(String)
    image = Column(String)
    slots = Column(Integer)
    activityType = Column(String)

    # Bidirectional Many to Many
    speakers = relationship("Speaker", secondary=speaker_activity_table, back_populates = "activities")
    # Bidirectional Many to Many
    enrolledUsers = relationship(
        "User", secondary=enrolled_table, back_populates="enrolledActivities")
    # Bidirectional Many to Many
    usersInQueue = relationship(
        "User", secondary=queue_table, back_populates="inQueueActivities")





class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    university = Column(String, nullable=True)
    degree = Column(String, nullable=True)
    typeOfUser = Column(String)
    department = Column(String, nullable=True)
    profileImage = Column(String)
    description = Column(String)
    contacts = Column(String, )
    researchInterests = Column(String )
    cv = Column(String, nullable=True)

    enrolledActivities = relationship(
        "Activity", secondary=enrolled_table, back_populates="enrolledUsers")
    inQueueActivities = relationship(
        "Activity", secondary=queue_table, back_populates="usersInQueue")

    @hybrid_property
    def univerityAndDegree(self):
        return self.university + " " + self.degree


class Speaker(Base):
    __tablename__ = "speaker"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    position = Column(String)
    profileImage = Column(String, nullable=True)
    companyImage = Column(String,  nullable=True)
    description = Column(String)
    contacts = Column(String,  nullable=True)
    researchInterests = Column(String,  nullable=True)
    typeOfSpeaker = Column(String)
    # Bidirectional Many to Many
    activities = relationship(
        "Activity", secondary=speaker_activity_table, back_populates="speakers")
    


