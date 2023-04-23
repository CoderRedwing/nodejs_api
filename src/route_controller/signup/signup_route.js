const express = require('express')
const signup = express.Router()

const { signupPost } = require('./controller/signupPost')
signup.post('/signup',signupPost)


module.exports = signup