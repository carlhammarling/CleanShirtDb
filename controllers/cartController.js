const router = require('express').Router()
const cartModel = require('../models/cartModel')
const auth = require('../authorization/auth')

//POST - Postar till den användaren som är inloggad
router.post('/', auth.verifyToken, cartModel.postCart)

//GET - Hämtar ordrar till den användaren som är inloggad
router.get('/', auth.verifyToken, cartModel.getCart)






module.exports = router;




