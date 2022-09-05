const express = require('express')

const api = express.Router()

const userController = require('./controllers/userController')

api.get('/patients', userController.index)

module.exports = api