const usersData = require('../dummyDatabase.json');

const getUsersOptions = require('../models/user.model');

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
        const { id } = req.params;
        const user = user.find((user) => { user.id === id });
        res.send(user);
    })

    done();

}

module.exports = userRoutes;