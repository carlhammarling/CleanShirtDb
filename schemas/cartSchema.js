const mongoose = require('mongoose');
const Product = require('../schemas/productSchema')
const User = require('../schemas/userSchema')



const cartSchema = mongoose.Schema({
    orderLine: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
      }],
    userId:     { type: mongoose.Types.ObjectId, ref: 'User'}
})



module.exports = mongoose.model('Cart', cartSchema)


