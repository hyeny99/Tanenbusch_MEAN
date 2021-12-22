const express = require('express')
const app = express()
const margan = require('morgan')
const mongoose = require('mongoose')


app.use(express.static('./views'))
// app.use(margan)


const router_complaints = require('./routes/complaints')
const router_homepage = require('./routes/homepage')
const router_contact = require('./routes/contact')
const router_view = require('./routes/view_complaints')


// register view engine
app.set('view engine', 'ejs')

//parse form data
app.use(express.urlencoded({encoded: false}))
// parse json
app.use(express.json())

// connect to mongoDB
const dbURI = 'mongodb+srv://guest:guest@cluster0.edqtw.mongodb.net/tannenbusch2?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => {
    app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
    })
    
    console.log('connected to db')}
)
.catch((error) => console.log(error))


app.use('/complaints', router_complaints)
app.use('/', router_homepage)
app.use('/contact', router_contact)
app.use('/view', router_view )


