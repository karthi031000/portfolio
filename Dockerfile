FROM python:3.12.7

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 8080

RUN python manage.py migrate

CMD python /app/manage.py runserver 0.0.0.0:8080
