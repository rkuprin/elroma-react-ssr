process.env.NODE_ENV = 'development'
process.env.PUBLIC_URL = process.env.PUBLIC_URL || ''

require('@babel/register')

const express = require('express')
const path = require('path')

const { applyDevMiddleware } = require('./utils/dev-middleware')
const { purgeCacheOnChange } = require('./utils/purge-cache')

process.on('unhandledRejection', err => {
  throw err
})

const port = process.env.PORT || 3000

const server = express()

purgeCacheOnChange(path.resolve(__dirname, '../'))

applyDevMiddleware(server)

server.use((req, res) => {
  const { app } = require('../server/app')
  app(req, res)
})


server.listen(port, err => {
  if (err) {
    return console.log(err);
  }
})