const fastify = require('fastify')({
    logger: {
        level: 'info',
        file: 'logs/api.log' 
      }
  })

//set the default port
let portnum = 3000

fastify.get('/', (req, res) => {
    res.send('Hello World!!');
});

fastify.get('/api', (req, res) => {
    //res.json({name: 'My name is Envoy'})
    res.send({ hello: 'world' })
});

// Run the server!
fastify.listen(portnum, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })