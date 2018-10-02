const logger = require('bristol')

logger.addTarget('console').withFormatter('human')

module.exports = logger
