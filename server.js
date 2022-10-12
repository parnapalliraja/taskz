require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const assert = require('assert')
const taskRoute = require('./route/taskRoute')

const port = process.env.PORT || Number(5000)

const app = express()

//body parser middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(`/`,taskRoute)

app.all('*', (req,res)=>{
    res.render('pnf')
}
)

app.listen(port,()=>{
    console.log(`server is running @ ${port}`)
})

