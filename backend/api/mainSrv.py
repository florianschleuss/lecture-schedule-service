import logging
import json
from typing import Tuple, Dict, List
import random

from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from flask import Flask, jsonify, request
from flask_httpauth import HTTPBasicAuth
from flask_restful import Api
from flask_cors import CORS
from bson.objectid import ObjectId
from bson.errors import InvalidId

app = Flask(__name__)
CORS(app)
api = Api(app)
auth = HTTPBasicAuth()

client = MongoClient('mongodb://florian:password@mongo-db:27017/lecture')
db = client.lecture


@app.route('/api/v1/test', methods=['GET'])
def test() -> Tuple[Dict, int]:
    if request.method == 'GET':
        db.lectures.delete_many({'name':'Datenbanken'})
        sem_list = []
        for elem in db.lectures.find(): 
            sem_list.append(str(elem))
        return jsonify(sem_list), 201
    else:
        return jsonify({'message': 'method not allowed'}), 405    


@app.route('/api/v1/authentification', methods=['POST'])
def authentification() -> Tuple[Dict, int]:
    data: dict = request.json
    user_id: str = data['userId']
    password: str = data['password']
    try:
        elem = db.users.find_one({'_id': user_id})
        if str(elem['password']) == 'admin' and user_id == 'admin':
            return jsonify({'authenticated': True, 'user-id': user_id, 'admin': True}), 200
        elif str(elem['password']) == password:
            return jsonify({'authenticated': True, 'user-id': user_id, 'admin': False}), 200
    except TypeError:
        pass
    except InvalidId:
        pass
    return jsonify({'authenticated': False, 'message': 'unauthenticated'}), 200


@app.route('/api/v1/users', methods=['POST', 'GET'])
def users() -> Tuple[Dict, int]:
    if request.method == 'GET':
        user_list = []
        try:
            for elem in db.users.find():
                if elem['_id'] != 'admin':
                    user_list.append({
                        'email': str(elem['_id']),
                        'firstName': str(elem['first-name']), 
                        'lastName': str(elem['last-name']),
                        'password': str(elem['password'])
                    })
            return jsonify({'users': user_list}), 200
        except TypeError:
            return jsonify({'message': 'no user found'}), 404
    elif request.method == 'POST':
        data: dict = request.json
        user: Dict[str, str] = {
            'first-name': data['firstName'],
            'last-name': data['lastName'],
            'password': data['password'],
            '_id': data['email']
        }
        try:
            result = db.users.insert_one(user)
            return jsonify({'user-id': str(result.inserted_id)}), 201
        except DuplicateKeyError:
            return jsonify({'message': 'email already present'}), 200

    else:
        return jsonify({'message': 'method not allowed'}), 405

        
@app.route('/api/v1/semesters', methods=['GET'])
def semsters() -> Tuple[Dict, int]:
    if request.method == 'GET':
        lectures = []
        for elem in db.lectures.find():
            lectures.append({
                'user': str(elem['user-id']),
                'name': str(elem['name']),
                'start': str(elem['start']),
                'end': str(elem['end']),
                'course': str(elem['course']),
                'exam': str(elem['exam'])
            })
        if len(lectures) <= 0:
            return jsonify([{
                'lecture-id': '0',
                'name': 'No Lectures found',
                'start': '-',
                'end': '-',
                'course': '-',
                'exam': '-'
            }]), 200
        else:
            return jsonify(lectures), 200
        return jsonify(sem_list), 200
    else:
        return jsonify({'message': 'method not allowed'}), 405 



@app.route('/api/v1/users/<user_id>', methods=['GET'])
def user(user_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':
        try:
            elem = db.users.find_one({'_id': user_id})
            return jsonify({
                'email': str(elem['_id']),
                'first-name': str(elem['first-name']),
                'last-name': str(elem['last-name']),
                'password': str(elem['password'])
            }), 200
        except TypeError:
            return jsonify({'message': 'user not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad user-id'}), 400
    else:
        return jsonify({'message': 'method not allowed'}), 405


@app.route('/api/v1/users/<user_id>/table', methods=['GET'])
def table(user_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':
        try:
            dates_list: List = []
            for lec in db.lectures.find({'user-id': user_id}):
                for dat in db.dates.find({'lecture-id': str(lec['_id'])}):
                    if dat['morning']:
                        time = '09:00-12.15'
                    else:
                        time = '13:15-16.30'
                    name = str(lec['name'])
                    room = str(dat['room'])
                    date_slash = str(dat['date']).split("/")  # "4/23/2020"
                    date = '{}-{:02d}-{:02d}'.format(date_slash[2], int(date_slash[0]), int(date_slash[1]))
                    dates_list.append({
                        'title': "{}\n{}\n{}".format(time, name, room),
                        'date': date
                    })
            return jsonify({'data': dates_list}), 200 
        except TypeError:
            return jsonify({'message': 'user not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad user-id'}), 400
    else:
        return jsonify({'message': 'method not allowed'}), 405


@app.route('/api/v1/users/<user_id>/lectures', methods=['GET', 'POST'])  # MongoDB
def lectures(user_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':
        lectures = []
        for elem in db.lectures.find({'user-id': user_id}):
            lectures.append({
                'lecture-id': str(elem['_id']),
                'name': str(elem['name']),
                'start': str(elem['start']),
                'end': str(elem['end']),
                'course': str(elem['course']),
                'exam': str(elem['exam'])
            })
        if len(lectures) <= 0:
            return jsonify([{
                'lecture-id': '0',
                'name': 'No Lectures found',
                'start': '-',
                'end': '-',
                'course': '-',
                'exam': '-'
            }]), 200
        else:
            return jsonify(lectures), 200

    elif request.method == 'POST':
        data: dict = request.json
        data['user-id'] = user_id
        result = db.lectures.insert_one(data)
        return jsonify({'lecture-id': str(result.inserted_id)}), 201

    else:
        return jsonify({'message': 'method not allowed'}), 405


@app.route('/api/v1/users/<user_id>/lectures/<lecture_id>', methods=['GET', 'DELETE'])  # MongoDB
def lecture(user_id: str, lecture_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':
        try:
            elem = db.lectures.find_one({'_id': ObjectId(lecture_id)})
            return jsonify({
                'lecture-id': str(elem['_id']),
                'name': str(elem['name']),
                'start': str(elem['start']),
                'end': str(elem['end']),
                'course': str(elem['course']),
                'exam': str(elem['exam'])
            }), 200
        except TypeError:
            return jsonify({'message': 'lecture not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad lecture-id'}), 400

    elif request.method == 'DELETE':
        try:
            deleted = db.lectures.delete_one({'_id': ObjectId(lecture_id)}).deleted_count
            if deleted == 1:
                return jsonify({'message': 'deleted'}), 200
            else:
                return jsonify({'message': 'lecture not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad lecture-id'}), 400

    else:
        return jsonify({'message': 'method not allowed'}), 405


@app.route('/api/v1/users/<user_id>/lectures/<lecture_id>/dates', methods=['GET', 'POST'])  # MongoDB
def dates(user_id: str, lecture_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':
        dates = []
        for elem in db.dates.find({'lecture-id': lecture_id}):
            dates.append({
                'date-id': str(elem['_id']),
                'date': str(elem['date']),
                'morning': elem['morning'],
                'room': str(elem['room'])
            })
        if len(dates) <= 0:
            return jsonify([{
                "date-id": "0",
                "date": "No dates found",
                "morning": None,
                "room": "-"
            }]), 200
        else:
            return jsonify(dates), 200

    elif request.method == 'POST':
        data: dict = request.json
        data['lecture-id'] = lecture_id
        result = db.dates.insert_one(data)
        return jsonify({'date-id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'method not allowed'}), 405


@app.route('/api/v1/users/<user_id>/lectures/<lecture_id>/dates/<date_id>', methods=['GET', 'PATCH', 'DELETE'])
def date(user_id: str, lecture_id: str, date_id: str) -> Tuple[Dict, int]:
    if request.method == 'GET':  # MongoDB
        try:
            elem = db.dates.find_one({'_id': ObjectId(date_id)})
            date_slash = str(elem['date']).split("/")  # "4/23/2020"
            date = '{}-{:02d}-{:02d}'.format(date_slash[2], int(date_slash[0]), int(date_slash[1]))
            return jsonify({
                'date-id': str(elem['_id']),
                'date': date,
                'morning': elem['morning'],
                'room': str(elem['room'])
            }), 200
        except TypeError:
            return jsonify({'message': 'date not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad date-id'}), 400

    elif request.method == 'PATCH':
        return jsonify({'message': 'patched'}), 200

    elif request.method == 'DELETE':  # MongoDB
        try:
            deleted = db.dates.delete_one({'_id': ObjectId(date_id)}).deleted_count
            if deleted == 1:
                return jsonify({'message': 'deleted'}), 200
            else:
                return jsonify({'message': 'date not found'}), 404
        except InvalidId:
            return jsonify({'message': 'bad date-id'}), 400

    else:
        return jsonify({'message': 'method not allowed'}), 405


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
