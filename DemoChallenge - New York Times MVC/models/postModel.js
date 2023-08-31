const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  article:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('post', postSchema)