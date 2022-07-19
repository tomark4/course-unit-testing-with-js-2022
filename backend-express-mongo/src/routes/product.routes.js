const express = require('express')

const productRoutes = express.Router()

const {
  store,
  getAll,
  getById,
  update,
  destroy,
} = require('../controllers/product-controller')

productRoutes.post('/products', store)

productRoutes.get('/products', getAll)

productRoutes.get('/products/:id', getById)

productRoutes.put('/products/:id', update)

productRoutes.delete('/products/:id', destroy)

module.exports = productRoutes
