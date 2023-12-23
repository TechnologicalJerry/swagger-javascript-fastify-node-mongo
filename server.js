const fastify = require('fastify')({ logger: true });

const HOST = 'localhost';

const PORT = 5050;

const start = async () => {
    try {
        await fastify.listen(PORT);
        console.log(`SERVER Running on HOST:${HOST} PORT:${PORT}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();

fastify.register(require('./routes/user.routes'));
