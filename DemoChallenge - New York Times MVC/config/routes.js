const express = require('express')
const route = express.Router()
const postController = require('../controller/postController')



route.get('/',postController.homePage)
route.get('/new/article',postController.newArticle)
route.post('/submit-article', postController.submitNewArticle)
route.get('/delete-article/:id', postController.deleteArticle)
route.get('/article/:id', postController.showArticle)
route.get('/edit/article/:id', postController.editArticle)
route.post('/submit-edit/:id', postController.submitEdit)


module.exports = route;