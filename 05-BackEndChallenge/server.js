const express = require('express')
const app = express()
const route = require('./config/routes')
require('./config/mongoose')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use(route)
let feed = 80
app.listen(feed, console.log('app is runing in 80'))