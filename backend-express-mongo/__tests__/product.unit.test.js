const request = require('supertest')

const app = require('../src/app')

const {
  saveProduct,
  getProducts,
  getProductsById,
  updateProductById,
  deleteProductById,
} = require('../src/data/product-data')

jest.mock('../src/data/product-data')

beforeEach(() => {
  saveProduct.mockClear()
  getProducts.mockClear()
  getProductsById.mockClear()
  updateProductById.mockClear()
  deleteProductById.mockClear()
})

const { buildProduct } = require('../__fixture__/product.fixture')

describe('Product unit test', () => {
  test('POST /products', async () => {
    const product = buildProduct()
    saveProduct.mockReturnValueOnce(Promise.resolve(product))
    const response = await request(app)
      .post('/products')
      .send({
        name: product.name,
        size: product.size,
        description: product.description,
      })
      .expect(201)

    expect(response.body).toEqual(product)
  })

  test('GET /products', async () => {
    getProducts.mockReturnValueOnce([])
    const response = await request(app).get('/products').expect(200)
    expect(response.body).toEqual({ products: [] })
  })

  test('GET /products/:id', async () => {
    const product = buildProduct()
    getProductsById.mockReturnValueOnce(product)
    const response = await request(app).get('/products/abc').expect(200)

    expect(getProductsById).toHaveBeenCalledWith(product._id)
    expect(response.body).toEqual({ product })
  })

  test('PUT /products/:id', async () => {
    const product = buildProduct()

    updateProductById.mockReturnValueOnce(Promise.resolve(product))
    const response = await request(app)
      .put('/products/abc')
      .send({
        name: product.name,
        size: product.size,
        description: product.description,
      })
      .expect(200)

    expect(response.body).toEqual({ productUpdated: product })

    expect(updateProductById).toHaveBeenCalledWith({
      id: product._id,
      data: {
        name: product.name,
        size: product.size,
        description: product.description,
      },
    })
  })

  it('DELETE /products/:id', async () => {
    const product = buildProduct()
    deleteProductById.mockReturnValueOnce({ message: 'success' })
    const response = await request(app)
      .delete(`/products/${product._id}`)
      .expect(200)
    expect(deleteProductById).toHaveBeenCalledWith(product._id)
    expect(response.body).toEqual({ message: 'success' })
  })
})
