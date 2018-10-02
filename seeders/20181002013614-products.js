'use strict'
const { test_seed: testSeed, seed } = require('./utils')

module.exports = {
  up: (queryInterface) => {
    if (process.env.NODE_ENV === 'test') {
      return queryInterface.bulkInsert('Products', testSeed, {})
    }

    return queryInterface.bulkInsert('Products', seed, {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
