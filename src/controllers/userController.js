

const User = require('../models/User')

/* 
    Register
*/
const register = async (req, res) => {

    try {
        const user = await User.create(req.body)
        res.send({ user })

    } catch (error) {
        return res.status(400).send({ error: 'Register error.' })
    }
}
/* 
    Delete one User
*/
const remove = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        return res.send('User is delected')

    } catch (error) {
        return res.status(400).send({ error: 'Delete failed' })
    }
}
/* 
    Show all users
*/
const showAll = async (req, res) => {

    try {
        const users = await User.find()
        res.send({ users })

    } catch (err) {
        return res.status(400).send({ error: 'Show all user is failed.' })
    }
}

/* 
    Update a user
*/

const update = async (req, res) => {
    
    const { email, password, username } = req.body

    try {

        const userUpdated = await User.findByIdAndUpdate(req.params.id, {
            username,
            email,
            password
        },
            {
                new: true
            })
        res.send( userUpdated)


    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Update is failed' })
    }
}



module.exports = { register, remove, showAll, update }