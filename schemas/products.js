const Joi = require('joi')
const { invalid_type_error: InvalidTypeError } = require('../errors')

const schema = Joi.object().keys({
  limit: Joi.number().integer().error(errors => { throw new InvalidTypeError(errors[0].path[0], 'integer') }),
  offset: Joi.number().integer().error(errors => { throw new InvalidTypeError(errors[0].path[0], 'integer') }),
  product_name: Joi.string().error(errors => { throw new InvalidTypeError(errors[0].path[0], 'string') })
})

module.exports = schema
