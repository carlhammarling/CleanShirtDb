const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:         { type: String, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true },
    imgURL:       { type: String, required: true },
    //Kolla den här, är det såhär vi vill göra? referera till en string eller vill vi referera till ett id?
    category:       { type: [String] }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)