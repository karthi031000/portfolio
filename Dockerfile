FROM python:3.12.7

WORKDIR /app

COPY requirements.txt /app

RUN pip install -r requirements.txt

COPY . /app

RUN python manage.py migrate

RUN python manage.py collectstatic

CMD python /app/manage.py runserver