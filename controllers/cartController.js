const router = require('express').Router()
const cartModel = require('../models/cartModel')
const auth = require('../authorization/auth')

//POST
// lägg in verifytoken
router.post('/', auth.verifyToken, cartModel.postCart)

//GET
router.post('/', cartModel.postCart)






module.exports = router;




