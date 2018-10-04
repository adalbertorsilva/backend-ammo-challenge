'use strict'

const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Product extends Model {
    static init (sequelize) {
      return super.init({
        product_name: DataTypes.STRING,
        product_image: DataTypes.STRING,
        product_value: DataTypes.DECIMAL,
        category: DataTypes.STRING
      }, { sequelize, underscored: true, timestamps: false })
    }
  }

  return Product
}
