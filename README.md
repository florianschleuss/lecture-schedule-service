# Title ![Latest Stable Version](https://img.shields.io/github/v/release/florianschleuss/lecture-schedule-service) ![Repository Size](https://img.shields.io/github/repo-size/florianschleuss/lecture-schedule-service) ![License](https://img.shields.io/github/license/florianschleuss/lecture-schedule-service)

#### Table of Contents
1. [Basic Instruction](#basic-instruction)
2. [Installation / Run](#installation-/-run)
3. [License](#license)

## Basic Instruction
This project shows a prototype of a lecture plan management tool. The project is divided into frontend and backend. The frontend is written in Angular and Typescript and designed with a huge focus on responsiveness. The backend is designed with scalability and light weight in mind. MongoDB was used as database, the API is written in Python and the whole backend is built as a docker container architecture.

## Installation / Run

### Frontend

Make sure that node.js and npm are installed in the latest version.
Start the Angular project in the './frontend/lecture-schedule-app' directory:

```bash
npm run serve
```

### Backend

Make sure that docker and docker-compose are installed in the latest version. It should be noted that the whole backend is designed for an ARMv7 architecture and cannot run on other architectures. To make this possible another MongoDB image must be specified in the docker-compose file.
Navigate to the './backend' directory and start the database container:

```bash
$ sudo docker-compose up mongo-db
```

Execute a new terminal inside the database container and create the user which is set in the API:

```bash
$ sudo docker exec -it mongo-db bash

> use lecture

> db.createUser({ user: "florian", pwd: "password", roles: [{ role: "dbOwner", db: "lecture" }] })
```
After that the database is ready for use, but completely empty.

Finally the API must be started:

```bash
$ sudo docker-compose up
```

## License
The Repository is licensed under the terms of the [GPL Open Source](LICENSE) license and is available for free.
