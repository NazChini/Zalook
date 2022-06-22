const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    unique: true,
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

class User {
  async addProductToLook(product, look) {
    look.products.push(product)
    //import look!!
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
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
