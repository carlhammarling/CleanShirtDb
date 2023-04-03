const router = require('express').Router()
const productsModel = require('../models/productsModel')

//POST
router.post('/', productsModel.postProduct)

//GET
router.get('/', productsModel.getAllProducts)
router.get('/:id', productsModel.getOneProduct)

//PUT
router.put('/:id', productsModel.putProduct)

//DELETE
router.delete('/:id', productsModel.deleteProduct)


module.exports = router;