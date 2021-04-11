
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

var posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {

    if (req.body.type == 'Post') {
        const id = uuidv4();
        const content = req.body.data.content;
        posts[id] = ({ id, content });

    } else if (req.body.type == 'Comment') {
        const id = uuidv4();
        const comment = req.body.data.comment;
        const status = req.body.data.status;
        post = posts[req.body.data.id];
        console.log(post);  
        if (!("comments" in post)) {
            post["comments"] = [];
        }
        post.comments.push({id, comment, status});
    }

    else if (req.body.type == 'Approval') {
        post = posts[req.body.data.id];
        console.log(post);
        post.comments.filter(c => {
            c.status = req.body.data.status;
        });
    }
    res.send({});
});

app.listen(8082, () => {

});