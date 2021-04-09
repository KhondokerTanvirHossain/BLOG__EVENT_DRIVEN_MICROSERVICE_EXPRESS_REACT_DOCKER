
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json())
app.use(cors());

var comments = [];



app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('/post/:id/comments', (req, res) => {
    res.send(comments.filter(p => p['postId'] == req.params.id));
});

app.post('/post/:id/comment', (req, res) => {
    const id = uuidv4();
    const postId = req.params.id;
    const comment = req.body.comment;
    comments.push({ id, postId, comment});

    axios.post('http://localhost:8085/events', {
        'type': 'Comment',
        'data': {
            'id': postId,
            'comment': comment
        }
    });
    
    res.send(comments.filter(p => p['id'] == id));
});

app.post('/events', (req, res) => {

    console.log('Event Received:' + req.body.type);

    res.send({});
});

app.listen(8081, () => {

});