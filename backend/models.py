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
    "enrolled_table",
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
    enrolledUser : Mapped[List[User]] = relationship(secondary=enrolled_table, back_populates='enrolledActivities') #Bidirectional Many to Many
    usersInQueue : Mapped[List[User]] = relationship(secondary=queue_table) #Unidirectional Many to Many


    
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
    university = Column(String, required=False)
    degree = Column(String, required=False)
    roles = Column(ARRAY)
    profileImage = Column(String)
    description = Column(String, required=False)
    contacts = Column(String, required=False)
    researchInterests = Column(String, required=False)
    cv = Column(String, required=False)



    enrolledActivities: Mapped[List[Activity]] = relationship(secondary=enrolled_table, back_populates ='enrolledUsers')

    


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

