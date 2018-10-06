const { logger, app } = require('./config')
const PORT = parseInt(process.env.PORT, 10) || 3001
app.set('port', PORT)
app.listen(PORT)

logger.info(`-------------------------------- Server up on port ${PORT} --------------------------------`)
