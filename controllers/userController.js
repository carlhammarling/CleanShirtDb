const router = require('express').Router()
const userModel = require('../models/userModel')
const { verifyToken } = require('../authorization/auth')

//POST
router.post('/add', userModel.postUser)
router.post('/login', userModel.loginUser)

//GET
router.get('/', userModel.getAllUsers)
router.get('/:id', userModel.getOneUser)

//DELETE
router.delete('/:id', verifyToken, userModel.deleteUser)






module.exports = router;




