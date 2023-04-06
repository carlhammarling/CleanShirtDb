const bcrypt = require('bcryptjs');
const Cart = require('../schemas/cartSchema');
const User = require('../schemas/userSchema');
const auth = require('../authorization/auth')


//CREATE / POST
exports.postCart = (req, res) => {
    console.log(req.userId)
    const { orderLine } = req.body

    //Hämtar id från token, man postar alltså till den man är inloggad på
    const userId = req.userId

    if(!orderLine ) {
        return res.status(400).json({
            message: 'You have to fill in all the forms'
        })        
    }
    

    Cart.create({ orderLine, userId })
    .then(data => {
        User.findByIdAndUpdate(userId, { $push: { shoppingCart: data._id }}, { new: true })
        .then(usercart => res.status(201).json(usercart))
        .catch(() => res.status(400).json({ message: 'Could not create order' }))
    })
    .catch(() => res.status(400).json({ message: 'Could not create order' }))
}


//GET - BY TOKEN


