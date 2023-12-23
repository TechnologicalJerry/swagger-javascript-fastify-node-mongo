const usersData = require('../dummyDatabase.json');

function userRoutes(fastify, options, done) {

    fastify.get('/healthcheck', (req, res) => {
        res.send({
            message: 'Hello, Welcome to Fastify Server.'
        })
    })

    fastify.get('/getAllUsers', (req, res) => {
        res.send(usersData)
    })

    fastify.get('/getUser/:id', (req, res) => {
        const {id} = req.params;
        res.send(usersData)
    })

    done()

}

module.exports = userRoutes;