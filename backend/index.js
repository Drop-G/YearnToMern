import express from 'express';
import users from './mocks/users';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80;

// get route to get all users
app.get('/v1/users', (req, res) => {
  console.log('get: data =>', users);
  res.send(users);
});

// get route to get user with a particular id
app.get('/v1/users/:id', (req, res) => {
	console.log(users[0]);
	res.send(users[0]);
	res.status(200).end();
});

// post route to generate a new user
app.post('/v1/users', (req, res) => {
	const id = req.body.id;
	const username = req.body.username;
	const role = req.body.role;
	console.log('post: data =>', id, username, role);
	res.status(200).end();
})

// put route using id to alter a particular user's data
app.put('/v1/users/:id', (req, res) => {
	const id = req.params.id;
	const username = req.body.username;
	const role = req.body.role;
	const msg = 'put: data =>' + ' ' + id + ' ' + username + ' ' + role;
  console.log(msg);
  res.send(msg);
	res.status(200).end();
})

// delete route using id to handle deleting a particular user
app.delete('/v1/users/:id', (req, res) => {
	const msg = 'delete: id =>' + ' ' + req.params.id;
	console.log(msg);
	res.send(msg);
	res.status(200).end();
})

app.listen(port, () =>
  console.log(`Express is listening on port ${port}!`)
);