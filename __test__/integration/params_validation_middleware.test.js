const request = require('supertest')
const { app } = require('../../config')

describe('PRODUCTS CONTROLLER INTEGRATION TEST', () => {
  describe('GET', () => {
    it('should return a 422 status and an error message when the limit query params is not a integer', async () => {
      const response = await request(app).get('/api/products?limit=blablabla')
      expect(response.status).toEqual(422)
      expect(response.body).toHaveProperty('errorMessage', 'The param limit must be of type integer')
    })

    it('should return a 422 status and an error message when the offset query params is not a integer', async () => {
      const response = await request(app).get('/api/products?offset=blablabla')
      expect(response.status).toEqual(422)
      expect(response.body).toHaveProperty('errorMessage', 'The param offset must be of type integer')
    })
  })
})
