const express = require('express')

const app = express()

const router = express.Router()

app.use(express.json())

// TODO: here the new routes
app.use(router)

module.exports = app
