const express = require('express');
const route = express.Router();
const postController = require('../controller/postController')
const commentController = require('../controller/commentController')


route.get('/', postController.homePage);
route.get('/create-new-post', postController.createNewPost);
route.post('/create-post', postController.submitPost)
route.post('/add-comment/:id', commentController.addComment)




module.exports = route;