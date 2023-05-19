const express = require('express')
const { login } = require('../Controllers/admin.controllers')
const routerAdmin = express.Router()

routerAdmin.get('/login', login)

module.exports = {
    routerAdmin
}
