# Youdo Back-End

![Logo](https://i.hizliresim.com/k8dd9qf.jpg)

This project represents the back-end of a simple to-do application developed using Node.js. The application allows users to create, update, list, and delete tasks. MongoDB is used as the database to store task data, and Mongoose is utilized to manage database operations. JSON Web Token (JWT) technology is employed for user authentication, and the dotenv library is used for secure management of sensitive data through environment variables. Designed according to RESTful API principles, this back-end can be easily integrated with front-end applications, enabling users to effectively manage their tasks.

## Features

- [Node](https://nodejs.org/en) to run javascript code on the server side.
- [Express](https://expressjs.com) as the application framework.
- [Nodemon](https://www.npmjs.com/package/nodemon) to refresh the server.
- [Mongoose](https://mongoosejs.com) to interact with MongoDB.
- [JWT](https://jwt.io) to perform authentication and authorisation processes in a secure and efficient manner.
- [Joi](https://joi.dev) to make data validation processes more secure and manageable.
- [Moment](https://momentjs.com) to facilitate the use of date and time.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) for secure password storage.
- [Dotenv](https://github.com/motdotla/dotenv) to help develop more secure and configurable applications by facilitating the management of environmental variables.

## Related Projects

You can install the front-end of the application on your computer by going to this [Youdo](https://github.com/omerylmzz/Youdo) link.

## Installation 

Clone this repository

```bash
git clone https://github.com/omerylmzz/Youdo-Backend.git
```

Install the required packages

```bash
npm install
```

## Run on your computer 

Create .env file and organise it as follows

```env
# MongoDB
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

# Json Web Token
JWT_TOKEN_KEY=
```

Install the Nodemon package if you don't have it

```bash
npm install -g nodemon
```

Start the server

```bash
npm start
```

## API Usage

The REST API to the example app is described below.

| Parameter | Type | Description |
|--------|-------|-------------------------|
| `/user/signin` | `POST` | Logging in to the application |
| `/user/signup` | `POST` | Create a new user |
| `/task/create` | `POST` | Create a new task |
| `/task/daily` | `GET` | Display a list of daily tasks |
| `/task/all` | `GET` | Display a list of all tasks |
| `/task/update/:id` | `PATCH` | Update a specific task |
| `/task/delete/:id` | `DELETE` | Delete a specific task |
| `/user/change/mail` | `POST` | Change the e-mail address |
| `/user/change/password` | `POST` | Change the password |

### Sign In

#### Body

```http
  {
    "MAIL": "example@mail.com",
    "PASSWORD": "123456"
  }
```

#### Request

`POST`

```http
  http://localhost:3000/user/signin
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Successfully logged in",
    "ACCESS_TOKEN": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

### Sign Up

#### Body

```http
  {
    "NAME": "Name",
    "SURNAME": "Surname",
    "MAIL": "example@mail.com",
    "PASSWORD": "123456"
  }
```

#### Request

`POST`

```http
  http://localhost:3000/user/signup
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "User created successfully"
  }
```

### Create a Task

#### Headers

```http
  {
    "Content-Type": "application/json",
    "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

#### Body

```http
  {
    "TITLE": "Title",
    "TASK": "Task",
    "DATE": "YYYY-MM-DD",
    "TIME": "00:00:00",
    "REMINDER": true,
    "LABEL": "#E72929"
  }
```

#### Request

`POST`

```http
  http://localhost:3000/task/create
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Task successfully created"
  }
```

### Daily Tasks

#### Headers

```http
  {
    "Content-Type": "application/json",
    "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

#### Request

`GET`

```http
  http://localhost:3000/task/daily
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Daily tasks listed",
    "DATA":[
        {
            "AUTHOR_ID": "66796a536c7114a480a0c421",
            "TITLE": "Title",
            "TASK": "Task",
            "DATE": "YYYY-MM-DD",
            "TIME": "00:00:00",
            "REMINDER": true,
            "LABEL": "#E72929",
            "COMPLETED": false
        },
        {
            ...
        }
    ]
  }
```

### All Tasks

#### Headers

```http
  {
    "Content-Type": "application/json",
    "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

#### Request

`GET`

```http
  http://localhost:3000/task/all
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "All tasks listed",
    "DATA":[
        {
            "AUTHOR_ID": "66796a536c7114a480a0c421",
            "TITLE": "Title",
            "TASK": "Task",
            "DATE": "YYYY-MM-DD",
            "TIME": "00:00:00",
            "REMINDER": true,
            "LABEL": "#E72929",
            "COMPLETED": false
        },
        {
            ...
        }
    ]
  }
```

### Update Task

#### Request

`PATCH`

```http
  http://localhost:3000/task/update/:id
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Task successfully updated"
  }
```

### Delete Task

#### Request

`DELETE`

```http
  http://localhost:3000/task/delete/:id`
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Task successfully deleted"
  }
```

### Change E-mail Address

#### Headers

```http
  {
    "Content-Type": "application/json",
    "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

#### Body

```http
  {
    "MAIL": "example@mail.com"
  }
```

#### Request

`POST`

```http
  http://localhost:3000/user/change/mail
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "E-mail address successfully changed"
  }
```

### Change Password

#### Headers

```http
  {
    "Content-Type": "application/json",
    "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
  }
```

#### Body

```http
  {
    "CURRENT_PASSWORD": "123456",
    "NEW_PASSWORD": "1234567"
  }
```

#### Request

`POST`

```http
  http://localhost:3000/user/change/password
```

#### Response

```http
  {
    "SUCCESSFULL": true,
    "MESSAGE": "Password successfully changed"
  }
```