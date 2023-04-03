const router = require('express').Router()
const userModel = require('../models/userModel')

//POST
router.post('/', userModel.postUser)

//GET
router.get('/', userModel.getAllUsers)




module.exports = router;




