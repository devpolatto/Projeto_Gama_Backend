const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes.js')

const server = express()
server.use(routes)
// server.use(bodyParser.urlencoded({extended: false}))
// server.use(bodyParser.json())

server.listen(3000, () => {
     console.log({
          "server": "runing"
     })
})