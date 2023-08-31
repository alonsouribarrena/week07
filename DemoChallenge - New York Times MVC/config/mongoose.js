const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://uribarrena:demochallenge@cluster0.lzwf7ct.mongodb.net/?retryWrites=true&w=majority')
  .then(()=>{
    console.log('db is connected');
  })
  .catch(err=> console.log(err))