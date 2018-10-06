const request = require('supertest')
const { app } = require('../../config')

describe('PRODUCTS CONTROLLER INTEGRATION TEST', () => {
  describe('GET', () => {
    it('should return a 200 status and a list of 10 objects when getting / from products api', async () => {
      const response = await request(app).get('/api/products')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('products')
      expect(response.body.products.rows).toHaveLength(10)
      expect(response.body.products.count).toEqual(10)
    })

    it('should return a 200 status and a list of 5 objects when getting / from products api with a 5 limit url param', async () => {
      const response = await request(app).get('/api/products?limit=5')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('products')
      expect(response.body.products.rows).toHaveLength(5)
      expect(response.body.products.count).toEqual(10)
    })

    it('should return a 200 status and a list of 4 objects when getting / from products api with a 6 limit and 6 offset url param', async () => {
      const response = await request(app).get('/api/products?limit=6&offset=6')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('products')
      expect(response.body.products.rows).toHaveLength(4)
      expect(response.body.products.count).toEqual(10)
    })

    it('should return a 200 status and a list of 1 objects when getting / from products api with a 2 limit, 1 offset and a poduct_name url param', async () => {
      const response = await request(app).get('/api/products?limit=2&offset=1&product_name=flamingo')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('products')
      expect(response.body.products.rows).toHaveLength(1)
      expect(response.body.products.count).toEqual(2)
    })

    it('should return a 200 status and a list of 2 objects when getting / from products api with a 2 limit, 1 offset and a poduct_name url param independently of the spell case', async () => {
      const response = await request(app).get('/api/products?limit=2&offset=1&product_name=socks')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveProperty('products')
      expect(response.body.products.rows).toHaveLength(1)
      expect(response.body.products.count).toEqual(2)
    })

    it('should return a 404 status  and an error message when getting any other route from the api', async () => {
      const response = await request(app).get('/anyoutherroute')
      expect(response.status).toEqual(404)
    })
  })
})
