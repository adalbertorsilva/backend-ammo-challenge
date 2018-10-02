const autoBind = require('auto-bind')
const { Product } = require('../models')
const logger = require('../config/logger')

class ProductController {
  constructor () {
    autoBind(this)
    this.limit = 10
    this.offset = 0
    this.product_name = ''
  }

  async find (req, res) {
    logger.info(`Get request at /api/products with parameters product_name: ${req.query.product_name}, limit: ${req.query.limit} and offset: ${req.query.offset}`)
    this.setQueryParams(req)
    const products = await Product.findAndCountAll({ limit: this.limit, offset: this.offset, where: { product_name: { $like: `%${this.product_name}%` } } })
    res.status(200).send({ products })
  }

  setQueryParams (req) {
    this.product_name = req.query.product_name ? req.query.product_name : ''
    this.limit = (!this.product_name && req.query.limit) ? req.query.limit : 10
    this.offset = (!this.product_name && req.query.offset) ? req.query.offset : 0
  }
}

module.exports = new ProductController()
