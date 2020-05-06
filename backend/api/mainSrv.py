import logging

from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_httpauth import HTTPBasicAuth
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)
auth = HTTPBasicAuth()

client = MongoClient('mongodb://florian:password@mongo-db:27017/lecture')

@app.route('/api/v1/test', methods=['GET'])
def test() -> int:
    try:
        logging.warning(client.test.list_collection_names())
    except Exception:
        logging.warning("fail")

    db = client.lecture
    semester = db.semseter
    semester.delete_many({'test': 'blablabla'})
    for elem in semester.find():
        logging.warning(elem)
    return jsonify({'message': 'semester.find()'})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)