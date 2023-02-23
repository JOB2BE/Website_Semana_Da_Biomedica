from database import Base
from typing import List
from sqlalchemy import Table, Column, ForeignKey, Integer, String, ARRAY
from sqlalchemy.orm import relationship, Mapped, Session
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.hybrid import hybrid_property



enrolled_table = Table(
    "enrolled_table",
    Base.metadata,
    Column("users", ForeignKey("users.id"), primary_key = True),
    Column("activities", ForeignKey("activities.id"), primary_key = True),
)

queue_table = Table(
    "queue_table",
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
    image = Column(String, nullable=True)
    slots = Column(Integer)
    activityType = Column(String)


    speaker = relationship("speakers", back_populates="activity")
    enrolledUser : Mapped[ARRAY] = relationship(secondary=enrolled_table, back_populates='enrolledActivities') #Bidirectional Many to Many
    usersInQueue : Mapped[ARRAY] = relationship(secondary=queue_table) #Unidirectional Many to Many


    
    def __setattr__(self, name, value, db: Session): # Will check the queue if some slots become available by quitting of another user

        super(Activity, self).__setattr__(name, value) ## parent unchanged class method
        db.flush()

        #if slots were changed
        if name=='slots' and self.slots > 0 and len(self.usersInQueue) > 0:

            if self.slots > len(self.usersInQueue) > 0:

                metric = len(self.usersInQueue)
            
            else:

                metric = self.slots

            queueToAdd = self.usersInQueue[metric - 1]
            setattr(self, 'enrolledUser', self.enrolledUser.append(queueToAdd))
            setattr(self, 'usersInQueue', self.usersInQueue.remove(queueToAdd))
            setattr(self, 'slots', self.slots - metric)
            

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    university = Column(String, nullable = True)
    degree = Column(String, nullable = True)
    roles = Column(ARRAY(String), nullable=True)
    profileImage = Column(String, nullable = True)
    description = Column(String, nullable = True)
    contacts = Column(String, nullable = True)
    researchInterests = Column(String, nullable = True)
    cv = Column(String, nullable = True)



    enrolledActivities: Mapped[List[Activity]] = relationship(secondary=enrolled_table, back_populates ='enrolledUsers')

    


    @hybrid_property
    def univerityAndDegree(self):
        return self.university + " " + self.degree


class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable = True)
    position = Column(String,  nullable = True)
    profileImage = Column(String, nullable = True)
    companyImage = Column(String,  nullable = True)
    description = Column(String,  nullable = True)
    contacts = Column(String,  nullable = True)
    researchInterests = Column(String,  nullable = True)
    typeOfSpeaker = Column(String)
   
    activity = relationship("activities", back_populates="speaker")

