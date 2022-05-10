const app = require('../src/app')
const request = require('supertest')

describe('Products endpoints', () => {
  it('post request to /products should create a product', async () => {
    const productToCreate = {
      name: 'Product' + Date.now(),
      category: 'Category' + Date.now(),
    }

    const createdProduct = (await request(app).post('/products').send(productToCreate)).body
    expect(createdProduct.name).toBe(productToCreate.name)
    expect(createdProduct.category).toBe(productToCreate.category)
  })

  it('get request to /products should list products', async () => {
    const productList = (await request(app).get('/products')).body
    const productsExist = productList.length > 0

    expect(productsExist).toBe(true)
  })
})
