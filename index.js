const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('Test API');
});

app.get('/api/name', (req, res) => {
    res.json({name: 'My name is Envoy'})
});

app.listen(8000, () => {
    console.log('Node API app listening on port 8000!');
});

