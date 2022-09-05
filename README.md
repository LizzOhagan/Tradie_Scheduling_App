# Tradie Scheduling App

An app that enables tradies to track jobs.

## Description

This app is a fake tradie app that enables tradies to read and update the jobs they are working on.

The app is a PERN stack using PostgresSQL.

A SQL database gives me the flexibility to join different data sets from different tables. Using a SQL database also makes it easier to query the data.

**_Please Note:  
This app is still a work in progress and will develop as I continue to work on it._**

The app is being built using [VS code](https://code.visualstudio.com/).

---

## Dependencies

To run this application you need to install:

- [Docker](https://www.docker.com/)
- [React](https://reactjs.org/) (this is still to be implemented for this project)

---

## Using the app for development

### To get started:

1. Clone the project into VS Code from GitHub
2. run `npm install` in the server
3. run `npm install` in the client (this folder is yet to be implemented)
4. Open docker on your computer
5. run `docker-compose up --build` in the root file of the project. NOTE: the db and server containers will start. The client container is still to be implemented.

<!-- **NOTE: the client container is not yet talking to the db container. The work around at this stage to:**

1. build the docker containers - but turn off the server container.
2. run `docker-compose down` to kill the port
3. in docker - manually turn on the db container
4. run `npm run start:dev` in the server so the port listens on port 5001. -->
