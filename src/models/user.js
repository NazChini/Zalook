const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  looks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Look',
      autopopulate: true,
    },
  ],
  favoriteProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: true,
    },
  ],
})

class User {
  async addProductToLook(productPlacementObj, look) {
    look.products.push(product)
    await look.save()
  }

  async favoriteAProduct(product) {
    this.favoriteProducts.push(product)
    await this.save()
  }

  async saveLook(look) {
    this.looks.push(look)
    await this.save()
  }

  async deleteLook(look) {
    this.looks = this.looks.find(ele => ele.id !== look.id)
    await this.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
