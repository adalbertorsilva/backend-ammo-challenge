const autoBind = require('auto-bind')
const { validate } = require('joi')
const { products: productsSchema } = require('../schemas')
const logger = require('../config/logger')

class ParamsValidationMiddleware {
  constructor () {
    autoBind(this)
  }

  validateRequest (req, res, next) {
    try {
      this.validateParams(req.query)
      next()
    } catch (error) {
      logger.error(`AN ERROR OCCURRED ---> ${error.message}`)
      res.status(error.status).send({ errorMessage: error.message })
    }
  }

  validateParams (params) {
    validate(params, productsSchema)
  }
}

module.exports = new ParamsValidationMiddleware()
