const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const Post = require('./postModel')
const { log } = require('console')

const getPost =asyncHandler( async (req,res)=>{
    const post =await  Post.find()
    console.log("from controller");
    res.status(200).json(post)
})

const postPost =asyncHandler( async (req,res)=>{
   console.log(req.query)
    const post =await  Post.create(req.query)
    res.status(200).json(post)
    console.log("posted")
})
 const deletePost = asyncHandler(async (req,res)=>{
    const ID = req.query.id

    console.log(ID)
   await Post.deleteOne({id:ID})
   
    res.send("contact deleted")
})


router.route("/").get(getPost).post(postPost).delete(deletePost)

module.exports = router 


