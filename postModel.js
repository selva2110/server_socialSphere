const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    datetime:{type:String},
    body:{type:String}
})

module.exports = mongoose.model('post',postSchema)