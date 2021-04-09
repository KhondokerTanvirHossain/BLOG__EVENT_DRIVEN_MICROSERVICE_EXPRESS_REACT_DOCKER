
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());

app.use(cors());

var posts = [];

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/post/:id', (req, res) => {
    res.send(posts.filter(p => p['id'] == req.params.id));
});

app.post('/posts', (req, res) => {
    const id = uuidv4();
    const content = req.body.content;
    posts.push({id, content});
    // res.status(201);
    axios.post('http://localhost:8085/events', {
        'type': "Post",
        'data': {
            'id': id,
            'content': content
        }
    });
    res.send(posts.filter(post => post['id'] == id));
});

app.post('/events', (req, res) => {
    
    console.log('Event Received:' + req.body.type);
    
    res.send({});
});

app.listen(8080, () => {

});