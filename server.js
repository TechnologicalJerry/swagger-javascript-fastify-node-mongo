const fastify = require('fastify')({ logger: true });

const PORT = 5050;

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start();

fastify.get('/healthcheck', (req, res) => {
    res.send({
        message: 'Hello, Welcome to Fastify Server.'
    })
})