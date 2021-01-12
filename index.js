
//const fs = require('fs');
//const bodyParser = require('body-parser')
//const pino = require('pino');
const fastify = require('fastify')({
    logger: {
        level: 'info',
        file: 'logs/api.log' // Will use pino.destination()
      }
  })

//const pinoms = require('pino-multi-stream');
//const expressPino = require('express-pino-logger');


// if (!fs.existsSync('logs')) fs.mkdirSync('logs');
// const streams = [
//   { stream: process.stdout},  // logs to console
//   { stream: fs.createWriteStream('logs/pino.log')}  // logs to file
// ];
// let logger = pinoms({streams: streams});
//  global.logger = logger;

//app.use(expressPino(logger));

//const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
//const expressLogger = expressPino({ logger });

//set the default port
let portnum = 3000

//fastify.use(bodyParser.json())

//app.use(expressLogger);

fastify.get('/', (req, res) => {
    res.send('Hello World!!');
});

fastify.get('/api', (req, res) => {
    //res.json({name: 'My name is Envoy'})
    res.send({ hello: 'world' })
});

// app.listen(portnum, () => {
//     logger.info('SMTP Relay API listening on port ' + portnum + '!!');
// });

// Run the server!
fastify.listen(portnum, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })