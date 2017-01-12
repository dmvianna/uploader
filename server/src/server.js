'use strict'

const http = require('http')
const url = require('url')

const start = () => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname
    console.log(`request for ${pathname} received`)
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello world')
    response.end()
  }

  http.createServer(onRequest).listen(9999)
  console.log('server has started')
}

module.exports = { start }
