const autoBind = require('auto-bind')
const { validate } = require('joi')
const { products: productsSchema } = require('../schemas')

class ParamsValidationMiddleware {
  constructor () {
    autoBind(this)
  }

  validateRequest (req, res, next) {
    try {
      this.validateParams(req.query)
      next()
    } catch (error) {
      res.status(error.status).send({ errorMessage: error.message })
    }
  }

  validateParams (params) {
    validate(params, productsSchema)
  }
}

module.exports = new ParamsValidationMiddleware()
