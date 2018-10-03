const { params_validation: paramsValidationMiddleware } = require('../../middlewares')
const { invalid_type_error: InvalidTypeError } = require('../../errors')

describe('PARAMS VALIDATION MIDDLEWARE UNIT TEST', () => {
  it('shoud return an error when product_name param is not a string', () => {
    const params = {
      product_name: 123
    }

    expect(() => paramsValidationMiddleware.validateParams(params)).toThrow(InvalidTypeError)
  })

  it('shoud return an error when limit param is not a integer', () => {
    const params = {
      limit: 123.4
    }

    expect(() => paramsValidationMiddleware.validateParams(params)).toThrow(InvalidTypeError)
  })

  it('shoud return an error when offset param is not a integer', () => {
    const params = {
      offset: "i'm not an integer"
    }

    expect(() => paramsValidationMiddleware.validateParams(params)).toThrow(InvalidTypeError)
  })
})
