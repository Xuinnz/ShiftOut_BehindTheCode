const express = require('express');

const app = express();
app.use(express.json());

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 1000, //15s
    max: 5,
    message: "Too many request, try again later"
});

app.use(limiter);


const users = [
    {id: 1, name: 'Red', age: 20},
    {id: 2, name: 'Andrew', age: 21},
    {id: 3, name: 'Sol', age: 22},
    {id: 4, name: 'Ais', age: 23}
];

//get all users
//
app.get('/v1/users', (req, res) => {
    const key = req.headers['api-key'];
    if (key != 'mypassword'){
        res.status(401).json({
            message: 'Unauthorized!'
        });
    }
    res.json(users);
});

app.get('/v2/users', (req, res) => {
    res.status(200).json({
        user: users,
        message: "hello this is a new version"
    });

});

//get specific user
app.get('/v1/users/:id', (req, res) =>{
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);
    res.json(user);
});

//create new user
app.post('/v1/users', (req, res) =>{
    const { name, age } = req.body;

    if(!name || !age){
        res.status(400).json({
            message: 'ERROR INCOMPLETE'
        });
    }
    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);
    res.json({
        message: 'User added successfully',
        user: newUser,
    });
});


//editing the user
app.put('/v1/users/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const {name, age} = req.body;

    const user = users.find(u => u.id === id);

    user.name = name;
    user.age = age;

    res.json({
        message: 'User updated!',
        user
    });
});

//delete a user
app.delete('/v1/users/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const user = users.findIndex(u => u.id === id);

    const deleted = users.splice(user, 1);
    res.json({
        message: 'User deleted',
        deleted
    });
});

app.get('/data', (req, res) =>{
    const data = Array.from({ length: 50000}, (_, i) => `Item ${i + 1}`);
    const page = parseInt (req.query.page) || 1;
    const limit = parseInt (req.query.limit) || 50000;
    const start = (page - 1) * limit;
    const end = page * limit;
    res.json(data.slice(start, end));    
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});