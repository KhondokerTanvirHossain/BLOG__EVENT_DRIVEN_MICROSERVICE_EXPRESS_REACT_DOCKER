
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());

app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body;
    
    axios.post('http://localhost:8080/events', event);
    axios.post('http://localhost:8081/events', event);
    // axios.post('http://localhost:8082/events', event);

    console.log('EVENT ARRIVED :' + event.type);

    res.send(event);
});


app.listen(8085, () => {
    console.log('Listening to 8085');
});