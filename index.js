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

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

