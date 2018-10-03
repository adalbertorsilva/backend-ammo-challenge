require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'ammo_challenge_dev',
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'ammo_challenge_test',
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres'
  }
}
