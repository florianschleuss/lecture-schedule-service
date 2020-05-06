FROM python:3.8

WORKDIR /usr/src/api
COPY . /usr/src/api

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD [ "python3.8", "mainSrv.py" ]