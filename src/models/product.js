const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  x: Number,
  y: Number,
})

class Product {
  async setCoordinates(x, y) {
    this.x = x
    this.y = y
    await look.save()
  }
}

productSchema.loadClass(Product)
productSchema.plugin(autopopulate)
module.exports = mongoose.model('Product', productSchema)
