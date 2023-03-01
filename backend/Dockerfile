# 
FROM python:3.10

# 
WORKDIR /code

RUN export PYTHONPATH=$PYTHONPATH:/code/app

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY . /code/app

# 
ENTRYPOINT ["/code/app/entrypoint.sh"]
