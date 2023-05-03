const express = require('express')
const { login } = require('../Controllers/admin.controllers')
const routerAdmin = express.Router()

routerAdmin.get('/', login)

module.exports = {
    routerAdmin
}