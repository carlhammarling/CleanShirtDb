const mongoose = require('mongoose')
const User = require('../schemas/userSchema')
const Product = require('../schemas/productSchema')


const commentSchema = mongoose.Schema ({
    productId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating:     { type: Number, required: true },
    comment:    { type: String, required: true}
}, { timestamps: true } )

module.exports = mongoose.model('Comment', commentSchema)