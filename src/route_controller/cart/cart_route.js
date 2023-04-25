const express=require('express')
const auth = require('../../middleware/auth')
const { CartDelete } = require('./controller/cartDelete')
const { cartPost } = require('./controller/cart_post')
const { GetAllCart } = require('./controller/getAll_cart')
const { GetSingleCart } = require('./controller/getSingle_cart')
const cart =express.Router()



cart.post('/cart',auth,cartPost)
 cart.get('/cart/all',auth,GetAllCart)
 cart.get('/cart/single/:id',auth,GetSingleCart)
 cart.delete('/cart/delete',auth,CartDelete)

module.exports = cart