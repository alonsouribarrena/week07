const moment = require('moment/moment')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  name:{
    type: String,
    required: true,
    maxlength: 25
  },
  message:{
    type: String,
    required: true,
    maxlength: 40
  },
  created_at:{
    type: Date,
    default : Date.now,
    get: function (create_At) {
        return moment(create_At).format('Do MMMM YYYY')
    }

}
},{ timestamps: true })

module.exports = mongoose.model('feed', feedSchema)