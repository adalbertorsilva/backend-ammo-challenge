const request = require('supertest')
const app = require('../../config/app')

describe('PRODUCTS CONTROLLER', () => {
  describe('GET', () => {
    it('should return a 200 status when getting / from products api', async () => {
      const response = await request(app).get('/api/products')
      expect(response.status).toEqual(200)
    })

    it('should return a 404 status  and an error message when getting any other route from the api', async () => {
      const response = await request(app).get('/anyoutherroute')
      expect(response.status).toEqual(404)
    })
  })
})
