# Expertron MERN Stack Assignment 

This is a MERN stack based fully functioning admin panel with ability to create, edit, delete tasks.You can click on the task name to edit and delete them and aslo it has some admin settings to edit profile and change password as well. 

## [Note: Screen Images of running application is also attached below]


## Tech Stack I have that I have used for this assignment

#### Front-end

* The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers).
* React-Router is used for navigation.
* Redux-Thunk is used for processing asynchronous requests.
* Bootstrap is used for page styling.

#### Back-end

* The back-end server is built with Express.js and Node.js in MVC pattern, which provides completed REST APIs for data interaction.
* Passport.js is used as an authentication middleware in the sever.
* JSON Web Token (JWT) is used for signing in user and making authenticated requests.

#### Database

* MongoDB is used as the back-end database, which include different data models/schemas
* Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).

## Usage

Running locally you need 3 terminals open: one for client, one for server, and another one for MongoDB back-end. Below are the steps:

1. Install Node.js;
2. Install MongoDB;
3. Clone this Repository;
4. Go to directory `client`, and run `npm install`;
5. Go to directory `server`, and run `npm install`;
6. In one terminal, run `mongod`;
7. In `server` directory, run `npm run dev`; // It will run the server on `http://localhost:3090/`
8. In `client` directory, run `npm run start`; // It will run the server on `http://localhost:3000/`

You can go to `http://localhost:3000/` to test the application.

## You can signup as a new user.

## For testing you can use

#### Email: test@g.com
#### Password: test@123

# Ref: Images attached below

### Welcome Page
![image](https://user-images.githubusercontent.com/42492660/111233248-a7f02a80-8612-11eb-9f42-54248c37eb29.png)

### Signup Page
![image](https://user-images.githubusercontent.com/42492660/111232800-da4d5800-8611-11eb-8c39-d85410a8eb2d.png)

### Signin Page
![image](https://user-images.githubusercontent.com/42492660/111232908-fc46da80-8611-11eb-900d-a49a1322988f.png)

### Task Page
![image](https://user-images.githubusercontent.com/42492660/111232932-0cf75080-8612-11eb-8c96-aecbc697a1a3.png)

### Task Detail Page with Edit and Delete feature
![image](https://user-images.githubusercontent.com/42492660/111232984-28faf200-8612-11eb-91d4-7774984cc9ca.png)

### Edit task with editor imlementation
![image](https://user-images.githubusercontent.com/42492660/111233057-48921a80-8612-11eb-88e7-82aa56c8e751.png)

### Admin Settings
![image](https://user-images.githubusercontent.com/42492660/111233135-6a8b9d00-8612-11eb-93a2-0eeed0225b41.png)

### Admin Profile

![image](https://user-images.githubusercontent.com/42492660/111233366-dec64080-8612-11eb-90c1-7d511e5a727b.png)

### Admin Change Password Feature

![image](https://user-images.githubusercontent.com/42492660/111233387-e71e7b80-8612-11eb-9e24-e536a3f61671.png)


