const router = require('express').Router()
const cartModel = require('../models/cartModel')
const auth = require('../authorization/auth')

//POST - Postar till den användaren som är inloggad
router.post('/', auth.verifyToken, cartModel.postCart)

//GET 
//- Hämtar ordrar kopplade till den användaren som är inloggad
router.get('/', auth.verifyToken, cartModel.getUserCart)

//Hämtar på ordernummer - bara tillgängligt för admin.
router.get('/:id', auth.verifyToken, auth.checkAdmin ,cartModel.getOneOrder)

router.get('/customer/:id', auth.verifyToken, auth.checkAdmin, cartModel.getCustomerCart)

//Deletea en order, bara tillgängligt för admin.
router.delete('/:id', auth.verifyToken, auth.checkAdmin ,cartModel.deleteCart)







module.exports = router;




