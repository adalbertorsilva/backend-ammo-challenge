const autoBind = require('auto-bind')
const { Product } = require('../models')
const logger = require('../config/logger')

class ProductController {
  constructor () {
    autoBind(this)
  }

  async find (req, res) {
    logger.info(`Get request at /api/products with parameters product_name: ${req.query.product_name}, limit: ${req.query.limit} and offset: ${req.query.offset}`)
    const products = await Product.findAndCountAll({ ...this.mountQueryParams(req) })
    res.status(200).send({ products })
  }

  mountQueryParams (req) {
    const { product_name: productName, limit, offset } = req.query

    return {
      limit: limit || 10,
      offset: (!productName && offset) ? offset : 0,
      where: { product_name: { $iLike: `%${productName || ''}%` } }
    }
  }
}

module.exports = new ProductController()
