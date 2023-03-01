from typing import List
import models
from config import settings
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr, BaseModel
from jinja2 import Environment, select_autoescape, FileSystemLoader
import os


env = Environment(
    loader=FileSystemLoader('%s/templates/' % os.path.dirname(__file__)),
    autoescape=select_autoescape(['html', 'xml'])
)


class EmailSchema(BaseModel):
    email: List[EmailStr]


class Email:
    def __init__(self, user: models.User, email: List[EmailStr], newPassword=None, activityName: str = None):
        self.name = user.name
        self.sender = 'JOB2BE <admin@admin.com>'
        self.email = email
        self.activityName =  activityName
        self.newPassword = newPassword 
        
        pass

    async def sendMail(self, subject, template):
        # Define the config
        conf = ConnectionConfig(
            MAIL_USERNAME=settings.EMAIL_USERNAME,
            MAIL_PASSWORD=settings.EMAIL_PASSWORD,
            MAIL_FROM=settings.EMAIL_FROM,
            MAIL_PORT=settings.EMAIL_PORT,
            MAIL_SERVER=settings.EMAIL_HOST,
            MAIL_STARTTLS=False,
            MAIL_SSL_TLS=False,
            USE_CREDENTIALS=True,
            VALIDATE_CERTS=True
        )
        # Generate the HTML template base on the template name
        template = env.get_template(f'{template}.html')

        html = template.render(
            name=self.name,
            subject=subject,
            activityName=self.activityName,
            newPassword=self.newPassword,

        )

        # Define the message options
        message = MessageSchema(
            subject=subject,
            recipients=self.email,
            body=html,
            subtype="html"
        )

        # Send the email
        fm = FastMail(conf)
        await fm.send_message(message)

    async def sendDummyEmail(self):
        print(env.loader)
        await self.sendMail('JOB2BE - Email Teste', 'dummy')

    async def sendPasswordRecoveryEmail(self):
        await self.sendMail('JOB2BE - Recuperação de Password', 'resetPassword')

    async def sendExitedQueueEmail(self):
        await self.sendMail('JOB2BE - Saíste da Fila de espera de uma actividade!', 'exitedQueue')
