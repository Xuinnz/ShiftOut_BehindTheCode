const express = require('express');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {{
    res.status(200).json({'message': 'hello from backend', 'name': 'red', 'age' : '20'});
}});

app.post('/greet', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    if(!name){
        return res.status(404).send('Error! No name detected');
    }
    res.status(200).json({'message': `Hello ${name} from backend, age ${age}`});
});

app.get('/secret', (req, res) => {
    const key = req.headers['key'];

    if(key === 'mypassword123'){
        res.status(200).json({'message': 'hello authorized user!, here is ur sensitive data'});
    }
    else {
        res.status(401).json({'message': 'WRONG PASSWORD! WHO ARE U'});
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});