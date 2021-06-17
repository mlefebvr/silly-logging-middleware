require('dotenv').config()
const moment = require('moment-timezone')

const log = (request, response, next) => {
  request.timestamp = moment()
  next()
  response.on('finish', () => {
    const requestTime = request.timestamp
    const responseTime = moment()

    const { statusCode, statusMessage } = response
    const duration = responseTime.format('x') - requestTime.format('x')
    const { body, params, query } = request

    console.log(JSON.stringify({
      environment: process.env.NODE_ENV,
      app: process.env.APP,
      timestamp: responseTime,
      details: {
        url: request.originalUrl,
        ...body,
        ...params,
        ...query,
        password: undefined,
      },
      statusCode,
      statusMessage,
      duration,
    }))
  })
}

module.exports = log
