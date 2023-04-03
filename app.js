const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use(express.static(__dirname + '/public'))
app.use('/api/products', require('./controllers/productsController'))


module.exports = app;
