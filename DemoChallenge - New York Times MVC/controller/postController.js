
const postModel = require('../models/postModel')


const homePage = (req,res)=> {
    postModel.find()
    .then(data=>{
      res.render('index', {
        post: data 
      })
    })
    .catch(err=> console.log(err))
  }

const newArticle = (req, res)=>{
  res.render('new-article')
}

const submitNewArticle = (req, res)=>{
  let newPost = new postModel(req.body)
  newPost.save()
  .then(()=>{
    res.redirect('/')
  })
  .catch(err=> console.log(err))
}

const deleteArticle = (req, res)=>{
  postModel.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/')
  })
  .catch(err=> console.log(err))
}

const showArticle = (req, res)=>{
  postModel.findById(req.params.id)
  .then((articleInfo)=>{
    res.render('article', {
      info: articleInfo
    })
  })
  .catch(err=> console.log(err))
}

const editArticle= (req, res)=>{
  postModel.findById(req.params.id)
  .then(articleInfo=>{
    res.render('edit-article', {
      info: articleInfo
    })
  })
  .catch(err=> console.log(err))
}

const submitEdit = (req, res)=>{
  postModel.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect('/')
  })
  .catch(err=> console.log(err))
}

module.exports = {
  homePage,
  newArticle,
  submitNewArticle,
  deleteArticle,
  showArticle,
  editArticle,
  submitEdit
}