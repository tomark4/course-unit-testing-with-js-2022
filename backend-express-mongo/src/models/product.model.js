const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  size: Number,
  description: String,
})

module.exports = mongoose.model('product', productSchema)
