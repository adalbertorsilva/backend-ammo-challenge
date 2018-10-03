class InvalidTypeError {
  constructor (param, type) {
    this.status = 422
    this.message = `The param ${param} must be of type ${type}`
  }
}

module.exports = InvalidTypeError
