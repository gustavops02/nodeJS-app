
const routes = require('express').Router()
const User = require('../models/User')


routes.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body)

        res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: 'something is wrong.' })
    }

})

module.exports = routes