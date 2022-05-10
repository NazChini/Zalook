const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const lookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      autopopulate: true,
    },
  ],
})

lookSchema.plugin(autopopulate)
module.exports = mongoose.model('Look', lookSchema)
