const {
  saveProduct,
  getProducts,
  getProductsById,
  updateProductById,
  deleteProductById,
} = require('../data/product-data')

const controller = {
  getAll: async (_, res) => {
    const products = await getProducts()
    return res.status(200).send({ products })
  },
  getById: async (req, res) => {
    const product = await getProductsById(req.params.id)
    return res.status(200).send({ product })
  },
  store: async (req, res) => {
    const { name, size, description } = req.body
    const productStore = await saveProduct({ name, size, description })
    res.status(201).json(productStore)
  },
  update: async (req, res) => {
    const { id } = req.params
    const productUpdated = await updateProductById({ id, data: req.body })
    return res.status(200).send({ productUpdated })
  },
  destroy: async (req, res) => {
    const { id } = req.params
    await deleteProductById(id)
    return res.status(200).send({ message: 'success' })
  },
}

module.exports = controller
