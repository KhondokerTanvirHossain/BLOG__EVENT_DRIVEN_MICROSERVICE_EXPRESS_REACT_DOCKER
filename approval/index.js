
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());

app.use(cors());


app.post('/events', (req, res) => {

    console.log('Event Received:' + req.body.type);

    if (req.body.type == "Comment") {
        axios.post('http://localhost:8085/events', {
            'type': 'Approval',
            'data': {
                'id': req.body.data.id,
                'comment': req.body.data.comment,
                'status': "approved"
            }
        });
    }

    res.send({});
});

app.listen(8083, () => {

});