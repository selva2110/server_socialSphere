const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const connectdb  = require('./db')
const postRoutes = require('./postController')
const cors = require('cors')

app.use(cors({
    origin:["http://localhost:3002"," https://selva2110.github.io"," https://socialsphere-server.onrender.com/api/posts/"],
    methods:["GET","POST","DELETE"]
})
)

//app.use(bodyparser.json)
app.use('/api/posts',postRoutes)


connectdb()
const port = 3000
app.listen(port,()=>{
    console.log("server running on "+port)
})
