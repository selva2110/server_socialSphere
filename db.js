const mongoose = require('mongoose')

const URL = 'mongodb+srv://admin:selva2110@selvacluster.mp5skub.mongodb.net/socialSphere?retryWrites=true&w=majority'

const connectdb = async ()=>{
   await mongoose.connect(URL)
   console.log("connection established")
}

module.exports =  connectdb