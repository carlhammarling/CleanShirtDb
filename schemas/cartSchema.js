const mongoose = require('mongoose');
const Product = require('../schemas/productSchema')

const orderLineSchema = mongoose.Schema({
    product:        { type: mongoose.Types.ObjectId, ref: 'Product' },
    quantity:       { type: Number }
})


const cartSchema = mongoose.Schema({
    orderLine:  [{ orderLineSchema }],
    userId:     { type: mongoose.Types.ObjectId, ref: 'User'}
})



module.exports = mongoose.model('Cart', cartSchema)