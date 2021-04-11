
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());

app.use(cors());

var posts = {};

const handleEvent = (type, data) => {
    if (type == 'Post') {
        const id = uuidv4();
        const content = data.content;
        posts[id] = ({ id, content });

    } else if (type == 'Comment') {
        const id = uuidv4();
        const comment = data.comment;
        const status = data.status;
        post = posts[data.id];
        console.log(post);
        if (!("comments" in post)) {
            post["comments"] = [];
        }
        post.comments.push({ id, comment, status });
    }

    else if (type == 'Approval') {
        post = posts[data.id];
        console.log(post);
        post.comments.filter(c => {
            c.status = data.status;
        });
    }
};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {

    handleEvent(req.body.type, req.body.data);
    
    res.send({});
});

app.listen(8082, async () => {
    
   const res = await axios.get('http://localhost:8085/events');
   for (let event of res.data) {
        console.log("Processing Event : " + event.type);
        handleEvent(event.type, event.data);
   }
});