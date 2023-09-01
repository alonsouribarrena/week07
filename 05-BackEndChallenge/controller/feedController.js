const feedModel = require('../model/feedModel')


const feedIndex = (req, res) => {
  feedModel.find()
    .sort({createdAt: -1})
    .then((data)=>{
    res.render('feed', {
      err: '',
      feed: data
    })
  })
  .catch(err => console.log(err))

}

const addFeed = (req, res) =>{
  let newFeed = new feedModel(req.body)
  newFeed.save()
    .then(()=>{
      res.redirect('/feed')
    })
    .catch(err=> res.render('feed',{
      err: err.errors
    }))
}


const getFeed = (req, res) =>{
  feedModel.findById(req.params.id)
  .then((feedInfo)=>{
    res.render('feedDetails',{
      feed: feedInfo
    })
  })
  .catch(err=>console.log(err))
}
const editFeed = (req, res) =>{
  feedModel.findById(req.params.id)
  .then((feedInfo)=>{
    res.render('editFeed',{
      feed: feedInfo
    })
  })
  .catch(err=>console.log(err))
}


const submitFeed = (req, res) =>{
  feedModel.findByIdAndUpdate(req.params.id, req.body)
  .then((feedInfo)=>{
    res.render('feedDetails',{
      feed: feedInfo
    })
  })
  .catch(err=> console.log(err))
}

const deleteFeed = (req, res) =>{
  feedModel.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/feed')
  })
  .catch(err =>console.log(err))
}



module.exports = {
  feedIndex,
  addFeed,
  getFeed,
  editFeed,
  deleteFeed,
  submitFeed
} 