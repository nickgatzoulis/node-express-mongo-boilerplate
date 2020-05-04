# NodeJS API Boilerplate
A quick-start NodeJS, ExpressJS and MongoDB API Boilerplate abiding by Model-Route-Controller principle

### Model-Route-Controller (MRC) Pattern
The project structure of this API such as to enable distinction between each level of interaction for a common API.
It breaks down the entagled API setup into three specific parts:

* Model: Responsible for defining the database Schema and Model for each Collection
* Route: Responsible for defining the endpoints and their respective acceptable HTTP requests, processed by a controller
* Controller: Responsible for implementing the actual _business_ logic behind the interaction (e.g. create a task entry in database)

The two clear benefits of separating the API components is: 
**i)** easier code management - it may become quite overwhelming to deal with hundreds of endpoints
**ii)** safer deployment - writing spaghetti code is not an option, therefore whatever you write will essentially be written with care

### Scalability & Efficiency
In regards to the **scalability** of this API implementation, it can be scaled infinitely for as long as your API server does not run out of resources.
The code available in this repository is a barebones setup which allows you to scale it whichever way you see fit.

As for the efficiency, this is a complete event-driven, non-blocking I/O API integrated with MongoDB.

### How To Run & Deploy
1. Run `npm install` command to install all dependencies
2. Run `nodemon server.js` command to launch the API server instance
3. You're ready! Unless you changed the port, your API is available at: `http://localhost:5000`
