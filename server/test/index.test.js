'use strict'

const assert = require('assert')
const http = require('http')

describe('/', () =>
         it('should return 200', done => {
           http.get('http://localhost:9999', res => {
             assert.equal(200, res.statusCode)
             done()
           })
         })
        )
