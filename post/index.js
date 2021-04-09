
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');

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
    res.send(posts.filter(p => p['id'] == id ));
});

app.listen(8080, () => {

});