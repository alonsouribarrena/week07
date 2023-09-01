const express = require('express')
const route = express.Router();
const feedController = require('../controller/feedController')

route.get('/feed',feedController.feedIndex)
route.post('/addFeed', feedController.addFeed)
route.get('/feed/:id',feedController.getFeed)
route.get('/feed/edit/:id', feedController.editFeed)
route.get('/delete/feed/:id', feedController.deleteFeed)
route.post('/feed/:id', feedController.submitFeed)


module.exports = route;