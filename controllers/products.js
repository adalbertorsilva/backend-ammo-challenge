const { Product } = require('../models')

class ProductController {
  async find (req, res) {
    const products = await Product.findAll()
    res.status(200).send({ products })
  }
}

module.exports = new ProductController()
