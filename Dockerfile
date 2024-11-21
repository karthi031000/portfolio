FROM python:3.12.7

WORKDIR /app

COPY requirements.txt /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 8000

RUN python manage.py migrate

CMD python /app/manage.py runserver 0.0.0.0:8000