#!/bin/bash

cd /code/app

alembic upgrade head

cd /code
exec uvicorn app.main:app --host 0.0.0.0 --port 80 --reload
