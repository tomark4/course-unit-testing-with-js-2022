const express = require('express')
const userController = require('./users-controller')

const app = express()

const router = express.Router()

app.use(express.json())

router.post('/users', userController.store)
router.get('/users', userController.getAll)
router.get('/users/:id', userController.getById)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

app.use(router)

module.exports = app
