const express = require('express')

const productRoutes = express.Router()
const { saveProduct, getProducts } = require('../data/product-data')

productRoutes.post('/products', async (req, res) => {
  const { name, size, description } = req.body
  const productStore = await saveProduct({ name, size, description })
  res.status(201).json(productStore)
})

productRoutes.get('/products', async (req, res) => {
  const products = await getProducts()
  return res.status(200).send({ products })
})

module.exports = productRoutes
