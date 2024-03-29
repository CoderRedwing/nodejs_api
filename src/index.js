const PORT = 12000
const express = require("express")
const app = express();


//global middleware included here
const bodyParser = require('body-parser')



//global middleware used here
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


/// routes are included here 
const signup = require('./route_controller/signup/signup_route')
const login = require('./route_controller/login/login_route')
const product =require('./route_controller/product/product_route');
const cart = require("./route_controller/cart/cart_route");
/// routes used as middleware here
app.use(signup);
app.use(login)
app.use(product)
app.use(cart)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})