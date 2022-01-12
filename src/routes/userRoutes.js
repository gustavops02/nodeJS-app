
const routes = require('express').Router()
const userController = require('../controllers/userController')

routes.get('/', userController.showAll)

routes.post('/login', userController.login)
routes.post('/register', userController.register)

routes.put('/update/:id', userController.update)

routes.delete('/:id', userController.remove)


module.exports = routes