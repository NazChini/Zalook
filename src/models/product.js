const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Look = require('../models/look')

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
  constructor(name, category) {
    this.name = name
    this.category = category
    this.x = -1
    this.y = -1
  }

  async setCoordinates(x, y) {
    this.x = x
    this.y = y
    // await this.save()
  }
}

const product1 = new Product('my dress', 'day dress')
product1.setCoordinates(30, 30)
console.log(product1)
product1.save()

productSchema.loadClass(Product)
productSchema.plugin(autopopulate)
module.exports = mongoose.model('Product', productSchema)
