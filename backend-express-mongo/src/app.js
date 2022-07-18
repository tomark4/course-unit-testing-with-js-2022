const express = require('express')
const productRoutes = require('./routes/product.routes')

const app = express()

app.use(express.json())

// TODO: here the new routes
app.use(productRoutes)

module.exports = app
