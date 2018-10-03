const { products: productController } = require('../../controllers')

describe('PRODUCTS CONTROLLER UNIT TEST', () => {
  it('shoudl return an 10 value limit param when it passed as empty', () => {
    const req = {
      query: {
        product_name: undefined,
        limit: '',
        offset: 3
      }
    }

    expect(productController.mountQueryParams(req)).toEqual({
      limit: 10,
      offset: 3,
      where: { product_name: { $iLike: `%%` } }
    })
  })

  it('shoudl return an 0 value offset param when it passed as empty', () => {
    const req = {
      query: {
        product_name: undefined,
        limit: '',
        offset: ''
      }
    }

    expect(productController.mountQueryParams(req)).toEqual({
      limit: 10,
      offset: 0,
      where: { product_name: { $iLike: `%%` } }
    })
  })

  it('shoudl return an 0 value offset param when product_name is not empty', () => {
    const req = {
      query: {
        product_name: "i'm not empty",
        limit: '',
        offset: 5
      }
    }

    expect(productController.mountQueryParams(req)).toEqual({
      limit: 10,
      offset: 0,
      where: { product_name: { $iLike: `%i'm not empty%` } }
    })
  })
})
