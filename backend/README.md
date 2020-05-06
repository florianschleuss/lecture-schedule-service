# Backend information

## API documentation

Base URL 'data.home-webserver.de:3010/api/v1' as a prefix for all request-urls


### /authentification [GET]

```json
Request-Header: {Authorization: Basic bWF4Lm11c3Rlcm1hbm5AbXVzdGVyLmRlOnBhc3N3b3Jk}

Response:
{
    "authenticated": true,
    "user-id": "abc1234567890"
}, 200 OK

{
    "authenticated": false
}, 403 Unauthorized
```

### /users [POST]

POST
```json
Request:
{
    "first-name": "Max",
    "last-name": "Mustermann",
    "e-mail": "max.mustermann@muster.de",
    "password": "password"
}

Response:
{
    "user-id": "abc1234567890"
}, 201 Created

409 Already present
```

### /users/{user-id} [GET]

GET
```json
Response:
{
    "user-id": "abc1234567890",
    "first-name": "Max",
    "last-name": "Mustermann",
    "e-mail": "max.mustermann@muster.de"
}, 200 OK

404 Not found
```

### /users/{user-id}/calendar [GET]

GET
```json
Response:
{
    "semester-start": "12/03/2020",
    "semseter-end": "13/03/2020",
    "dates": [[
        {
            "lectrue": "Vorlesung2",
            "room": "R320"
        },
        {
            "lectrue": "-",
            "room": ""
        }],[{
            "lectrue": "Vorlesung3",
            "room": "R120"
        },
        {
            "lectrue": "Vorlesung1",
            "room": "R534"
        }]]
}, 200 OK

404 Not found
```

### /users/{user-id}/lectures [GET, POST]

GET
```json
Response:
[
    {
        "lecture-id": "abc1234567890",
        "name": "Wissenschaftliches Arbeiten",
        "course": "WWI2018H",
        "exam": null | "Test"
    },
    {
        "lecture-id": "abc1234567890",
        "name": "Einführung in die WI",
        "course": "WWI2019H",
        "exam": null | "Test"
    },
    {
        "lecture-id": "abc1234567890",
        "name": "Digitale Transformation",
        "course": "WWI2018C",
        "exam": null | "Test"
    }
], 200 OK

If no lecture is present

[
    {
        "lecture-id": "0000000000",
        "name": "Keine Vorlesung vorhanden",
        "course": "",
        "exam": null
    }
], 200 OK
```

POST
```json
Request:
{
    "name": "Einführung in die WI",
    "course": "WWI2019H",
    "exam": null | "Test"
}

Response:
{
    "lecture-id": "ABC0987654321"
}, 201 Created

409 Already present
```

### /users/{user-id}/lectures/{lecture-id} [GET]

GET
```json
Response:
{
    "lecture-id": "abc1234567890",
    "name": "Einführung in die WI",
    "course": "WWI2019H",
    "exam": null | "Test"
}, 200 OK

404 Not found
```

### /users/{user-id}/lectures/{lecture-id}/dates [GET, POST]

GET
```json
Response:
[
    {
        "date-id": "abc1234567890",
        "date": "12-04-2020",
        "morning": false,
        "room": "R320"
    },
    {
        "date-id": "abc1234567890",
        "date": "18-04-2020",
        "morning": false,
        "room": "R320"
    },
], 200 OK

If no date is present

[
    {
        "date-id": "00000000000",
        "date": "nicht Vorhanden",
        "morning": false,
        "room": ""
    }
], 200 OK
```

POST
```json
Request:
{
    "date": "12-04-2020",
    "morning": false,
    "room": "R320"
}

Response:
{
    "date-id": "ABC0987654321"
}, 201 Created

409 Already present
```

### /users/{user-id}/lectures/{lecture-id}/dates/{date-id} [GET, PATCH, DELETE]

GET
```json
Response:
{
    "date-id": "abc1234567890",
    "date": "12-04-2020",
    "morning": false,
    "room": "R320"
}, 200 OK

404 Not found
```

PATCH
```json
Request:
{
    "date": "12-04-2020"
}

Response:
200 OK

404 Not found
```

DELETE
```json
Response:
200 OK

404 Not found
```

# Note

Vorlesung ändern / löschen für später
