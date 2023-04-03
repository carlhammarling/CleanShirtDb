const mongoose = require('mongoose');
//importera Cart

const userSchema = mongoose.Schema({
    firstName:         { type: String, required: true },
    lastName:          { type: String, required: true },
    email:             { type: String, required: true },
    passwordHash:      { type: String, required: true },
    // shoppingCart:      { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    shoppingCart:      [{ cartSchema }]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)