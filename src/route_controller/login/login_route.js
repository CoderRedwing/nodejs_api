const express =require('express')
const { loginPost } = require('./controller/loginController')
const login =express.Router()
login.post('/login',loginPost)
module.exports = login