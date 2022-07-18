const request = require('supertest')

const app = require('../src/app')

const { saveProduct, getProducts } = require('../src/data/product-data')

jest.mock('../src/data/product-data')

beforeEach(() => {
  saveProduct.mockClear()
})

describe('Product unit test', () => {
  it('post to products', async () => {
    saveProduct.mockReturnValueOnce(
      Promise.resolve({
        productStore: {
          name: 'fake',
          size: 1,
          description: 'this is a test',
          _id: 1,
        },
      })
    )
    const response = await request(app)
      .post('/products')
      .send({
        name: 'fake',
        size: 1,
        description: 'this is a test',
      })
      .expect(201)

    expect(response.body).toEqual({
      productStore: {
        name: 'fake',
        size: 1,
        description: 'this is a test',
        _id: 1,
      },
    })
  })

  test.only('GET /products', async () => {
    getProducts.mockReturnValueOnce([])
    const response = await request(app).get('/products').expect(200)
    expect(response.body).toEqual({ products: [] })
  })
})
