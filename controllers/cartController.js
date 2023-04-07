const router = require('express').Router()
const cartModel = require('../models/cartModel')
const auth = require('../authorization/auth')

//POST - Postar till den användaren som är inloggad
router.post('/', auth.verifyToken, cartModel.postCart)

//GET 
//- Hämtar ordrar kopplade till den användaren som är inloggad
router.get('/', auth.verifyToken, cartModel.getUserCart)

//Hämtar på ordernummer - fixa så admin bara kan nå detta?
router.get('/:id', auth.verifyToken, cartModel.getOneOrder)


router.delete('/:id', cartModel.deleteCart)







module.exports = router;




