const postModel = require('../model/postModel')


const homePage = (req, res)=>{
  postModel.find()
  .populate('comments', '_id comment')
  .sort({created_at: -1})
  .then(data=> {
    res.render('index',{
      err: '',
      posts: data
    })
  })
  .catch(err=>{
    console.log(err);
  })
}

const createNewPost = (req, res)=>{
  res.render('index', {
    err: ''
  })
}

const submitPost = (req, res)=>{
  if(req.body.post === ''){
    res.render('index',{
      err: 'all fields required'
    })
  } else  {
    let newPost = new postModel(req.body)
    newPost.save()
      .then(()=>{
        res.redirect('/')
      })
      .catch(err=>{
        console.log(err);
      })
  }
  
}

module.exports = {
  homePage,
  createNewPost,
  submitPost
}