const router = require('express').Router()
const productsModel = require('../models/productsModel')
const auth = require('../authorization/auth')


//POST
router.post('/', auth.verifyToken, auth.checkAdmin, productsModel.postProduct)

//GET
router.get('/', productsModel.getAllProducts)
router.get('/:id', productsModel.getOneProduct)

//PUT
router.put('/:id', auth.verifyToken, auth.checkAdmin, productsModel.putProduct)

//DELETE
router.delete('/:id', auth.verifyToken, auth.checkAdmin, productsModel.deleteProduct)


module.exports = router;