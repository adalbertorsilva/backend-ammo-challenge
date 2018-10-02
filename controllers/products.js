const autoBind = require('auto-bind')
const { Product } = require('../models')

class ProductController {
  constructor () {
    autoBind(this)
    this.limit = 10
    this.offset = 0
  }
  async find (req, res) {
    const products = await Product.findAll({ limit: this.limit, offset: this.offset })
    res.status(200).send({ products })
  }
}

module.exports = new ProductController()
