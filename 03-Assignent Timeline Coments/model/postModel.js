const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  post:{
    type: String,
    required: true
  },
  comments:[
    {
      type: mongoose.Types.ObjectId,
      ref: "comment"
    }
  ],
  created_at:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('post', postSchema);