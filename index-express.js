const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
//const pino = require('pino');

const pinoms = require('pino-multi-stream');
const expressPino = require('express-pino-logger');


if (!fs.existsSync('logs')) fs.mkdirSync('logs');
const streams = [
  { stream: process.stdout},  // logs to console
  { stream: fs.createWriteStream('logs/pino.log')}  // logs to file
];
let logger = pinoms({streams: streams});
//  global.logger = logger;

app.use(expressPino(logger));


//const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
//const expressLogger = expressPino({ logger });

//set the default port
let portnum = 3000

app.use(bodyParser.json())

//app.use(expressLogger);

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/api', (req, res) => {
    res.json({name: 'My name is Envoy'})
});

app.listen(portnum, () => {
    logger.info('SMTP Relay API listening on port ' + portnum + '!!');
});
