const mongoose = require('mongoose');
const Product = require('../schemas/productSchema')
const User = require('../schemas/userSchema')



const cartSchema = mongoose.Schema({
    orderLine: [{
        product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product',
        required: true
       },
        quantity: {
        type: Number,
        required: true
        }
      }],
    userId:     { type: mongoose.Types.ObjectId, ref: 'User', required: true }
})



module.exports = mongoose.model('Cart', cartSchema)


