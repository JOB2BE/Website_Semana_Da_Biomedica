from database import Base
from typing import List, Optional
from sqlalchemy import Table, Column, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship, Mapped, Session, mapped_column
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.ext.hybrid import hybrid_property
import enum
import crud


# enrolled_table = Table(
#     "enrolled_table",
#     Base.metadata,
#     Column("users", ForeignKey("users.id"), primary_key=True),
#     Column("activities", ForeignKey("activities.id"), primary_key=True),
# )

# queue_table = Table(
#     "queue_table",
#     Base.metadata,
#     Column("users", ForeignKey("users.id")),
#     Column("activities", ForeignKey("activities.id")),
# )

# speaker_activity_table = Table(
#     "speaker_activity_table",
#     Base.metadata,
#     Column("speaker", ForeignKey("speakers.id"), primary_key=True),
#     Column("activity", ForeignKey("activities.id"), primary_key=True),
# )


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
    __tablename__ = "activities"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
    requirements = Column(String)
    scheduleAndLocation = Column(String)
    image = Column(String, nullable=True)
    slots = Column(Integer)
    activityType = Column(String)

    speakers = Column(ARRAY(UUID(as_uuid=True)))  # Bidirectional Many to Many
    # Bidirectional Many to Many
    enrolledUser = Column(ARRAY(UUID(as_uuid=True)))
    # Unidirectional Many to Many
    usersInQueue = Column(ARRAY(UUID(as_uuid=True)))

    # Will check the queue if some slots become available by quitting of another user
    def __setattr__(self, name, value, db: Session = None):

        # parent unchanged class method
        super(Activity, self).__setattr__(name, value)

        # if slots were changed
        if db != None and name == 'slots' and self.slots > 0 and len(self.usersInQueue) > 0:
            db.flush()
            if self.slots > len(self.usersInQueue) > 0:

                metric = len(self.usersInQueue)

            else:

                metric = self.slots

            queueToAdd = self.usersInQueue[metric - 1]
            setattr(self, 'enrolledUser', self.enrolledUser.append(queueToAdd))
            setattr(self, 'usersInQueue', self.usersInQueue.remove(queueToAdd))
            setattr(self, 'slots', self.slots - metric)
    # @classmethod
    # def getObjects(self, relationship):
    #     if relationship == 'speakers':
    #         returnList = []
    #         for id in relationship:
    #             crud.getSpeaker(db)

    #     elif (relationship == 'enrolledUser'):

    #     else:
    #         raise Exception(
    #             "Invalid relationship, these can either be 'speakers', 'enrolledUser'")

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    university = Column(String, nullable=True)
    degree = Column(String, nullable=True)
    typeOfUser = Column(String, nullable=True)
    department = Column(String, nullable=True)
    profileImage = Column(String, nullable=True)
    description = Column(String, nullable=True)
    contacts = Column(String, nullable=True)
    researchInterests = Column(String, nullable=True)
    cv = Column(String, nullable=True)

    enrolledActivities = Column(ARRAY(UUID(as_uuid=True)))

    @hybrid_property
    def univerityAndDegree(self):
        return self.university + " " + self.degree


class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    position = Column(String,  nullable=True)
    profileImage = Column(String, nullable=True)
    companyImage = Column(String,  nullable=True)
    description = Column(String,  nullable=True)
    contacts = Column(String,  nullable=True)
    researchInterests = Column(String,  nullable=True)
    typeOfSpeaker = Column(String)

    # Bidirectional Many to Many
    activities = Column(ARRAY(UUID(as_uuid=True)), nullable=True)
