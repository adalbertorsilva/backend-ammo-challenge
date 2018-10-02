'use strict'
const { test_seed: testSeed } = require('./utils')

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV === 'test') {
      return queryInterface.bulkInsert('Products', testSeed, {})
    }

    return queryInterface.bulkInsert('Products', [], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
