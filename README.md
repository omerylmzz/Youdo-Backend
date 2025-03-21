# Youdo Back-End

![Image](https://github.com/user-attachments/assets/40f76b8d-a194-4c41-9964-ea75b52597e2)


This project represents the back-end of a simple to-do application developed using Node.js. The application allows users to create, update, list, and delete tasks. MongoDB is used as the database to store task data, and Mongoose is utilized to manage database operations. JSON Web Token (JWT) technology is employed for user authentication, and the dotenv library is used for secure management of sensitive data through environment variables. Designed according to RESTful API principles, this back-end can be easily integrated with front-end applications, enabling users to effectively manage their tasks.

## Libraries

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

Install the dependencies

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

```json
{
  "MAIL": "example@mail.com",
  "PASSWORD": "123456"
}
```

#### Request

`POST`

```bash
http://localhost:3000/user/signin
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "Successfully logged in",
  "ACCESS_TOKEN": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

### Sign Up

#### Body

```json
{
  "NAME": "Name",
  "SURNAME": "Surname",
  "MAIL": "example@mail.com",
  "PASSWORD": "123456"
}
```

#### Request

`POST`

```bash
http://localhost:3000/user/signup
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "User created successfully"
}
```

### Create a Task

#### Headers

```json
{
  "Content-Type": "application/json",
  "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

#### Body

```json
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

```bash
http://localhost:3000/task/create
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "Task successfully created"
}
```

### Daily Tasks

#### Headers

```json
{
  "Content-Type": "application/json",
  "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

#### Request

`GET`

```bash
http://localhost:3000/task/daily
```

#### Response

```json
{
  "SUCCESSFUL": true,
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

```json
{
  "Content-Type": "application/json",
  "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

#### Request

`GET`

```bash
http://localhost:3000/task/all
```

#### Response

```json
{
  "SUCCESSFUL": true,
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

```bash
http://localhost:3000/task/update/:id
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "Task successfully updated"
}
```

### Delete Task

#### Request

`DELETE`

```bash
http://localhost:3000/task/delete/:id`
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "Task successfully deleted"
}
```

### Change E-mail Address

#### Headers

```json
{
  "Content-Type": "application/json",
  "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

#### Body

```json
{
  "MAIL": "example@mail.com"
}
```

#### Request

`POST`

```bash
http://localhost:3000/user/change/mail
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "E-mail address successfully changed"
}
```

### Change Password

#### Headers

```json
{
  "Content-Type": "application/json",
  "X-Auth-User-Token": "eyJraDKSDiJvsd32kSdslgdssdaJDSLdaf2LrsfKa1"
}
```

#### Body

```json
{
  "CURRENT_PASSWORD": "123456",
  "NEW_PASSWORD": "1234567"
}
```

#### Request

`POST`

```bash
http://localhost:3000/user/change/password
```

#### Response

```json
{
  "SUCCESSFUL": true,
  "MESSAGE": "Password successfully changed"
}
```
