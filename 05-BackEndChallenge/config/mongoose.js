const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://uribarrena:challenge@cluster0.gkcritn.mongodb.net/')
  .then(console.log('DB is connected'))
  .catch(err=> console.log(err))