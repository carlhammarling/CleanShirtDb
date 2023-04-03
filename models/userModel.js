const bcrypt = require('bcryptjs');
const User = require('../schemas/userSchema');
const auth = require('../authorization/auth')

//CRUD


//CREATE / POST
exports.postUser = async (req, res) => {
    const { firstName, lastName, email, password, shoppingCart } = req.body

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            message: 'You have to fill in all the forms'
        })        
    }

    try {

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const _user = new User({ firstName, lastName, email, passwordHash: hash, shoppingCart })

    const user = await _user.save()
    
    //Ger en token tillbaka som kan användas/decodas
    res.status(201).json(auth.generateToken(user))

    } catch { 
        res.status(400).json({ message: 'Something went wrong when trying to create a user.' })
    }
    
}


//GET

exports.getAllUsers = (req, res) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(() => res.status(400).json({ message: 'Could not get users.' }))
}



//DELETE


