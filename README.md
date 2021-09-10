This is a simple [node js](https://nodejs.org) backend server as a task using [MongoDB](https://www.mongodb.com).

## Todo-list app.
The user can create todo-list for him and category them sorted by categories

### The app contains: 
- Authorization system depends on JWT token: (login and register ).
- Authorization has 3 levels: not a user, user and admin.
- RESTful API end points for get/add/delete todo, get/add/delete category and login/register user.

### The node moduled used in the server:
- [Express](https://expressjs.com)
- [mongoose](https://mongoosejs.com) MongoDB object modeling tool
- jsonwebtoken: An implementation of JSON Web Tokens JWT.

###### For Development:
- [Babel](https://babeljs.io) because I used ES6 in the app.
- For **testing**: [Mocha](https://mochajs.org) - [Chai](https://www.chaijs.com) - [chai-http](https://www.chaijs.com/plugins/chai-http)
- [nodemon](https://nodemon.io/) restarting the node application when file changes.

### The app's files
├── build
├── src
│   ├── api
|   |    ├── category
│   │    │    ├── category.ctrl.js
│   │    │    ├── category.model.js
│   │    │    └── index.js
│   │    ├── todo
│   │    │    ├── todo.ctrl.js
│   │    │    ├── todo.model.js
│   │    │    └── index.js
│   │    └── user
│   │    │    ├── user.ctrl.js
│   │    │    ├── user.model.js
│   │    │    └── index.js
│   ├── config
│   │    ├── auth.js
│   │    ├── config.js
│   │    ├── express.js
│   │    └── routes.js
│   ├── server.js
│   ├── test
|   |    ├── category.js
│   │    ├── todo.js
│   │    └── user.js
│   
├── .gitignore
├── .babelrc
├── README.md
└── package.json