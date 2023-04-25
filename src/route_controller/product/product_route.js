const express=require('express')
const { productPost } = require('./controller/productController')
const { GetAllProduct } = require('./controller/productGetAll')
const { GetSingleProduct } = require('./controller/productSingleGet')

const product =express.Router()
product.post('/product',productPost)
product.get('/product/all',GetAllProduct)
product.get('/product/single/:id',GetSingleProduct)
module.exports = product