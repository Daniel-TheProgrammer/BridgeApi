#### Project Setup

In order to run this project, in the root create .env with these three variables, with your own values.<br />

MONGO_URI in app.js file<br />
JWT_SECRET in models/User.js file<br />
JWT_LIFETIME in models/User.js file<br />

After that run this command

```bash
npm install && npm start
```

#### API end-points

If you run this project in localhost then it will run on 5000 port. Also you can change this.<br />

Authentication<br />
POST http://localhost:5000/api/auth/register <br />
POST http://localhost:5000/api/auth/login <br />

CRUD <br />
GET http://localhost:5000/api/items <br />
GET http://localhost:5000/api/items/{id} <br />
POST http://localhost:5000/api/items <br />
PATCH http://localhost:5000/api/items/{id} <br />
DELETE http://localhost:5000/api/items/{id} <br />
