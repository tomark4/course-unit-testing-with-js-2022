import express from 'express'
import { getUserById, getUsers, storeUser } from './users-controller.js'

const app = express()

const router = express.Router()

app.use(express.json())

router.post('/users', storeUser)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)

app.use(router)

export default app
