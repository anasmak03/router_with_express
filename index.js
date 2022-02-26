const express = require('express');
const detenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT_URL;


/// import style css
app.use(express.static("public"))

///import ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')

//// import routes
const home = require('./routes/Home');
const about = require('./routes/About');
const services = require('./routes/Services');
const contact = require('./routes/Contact')

//middleware routes
app.use('/', home);
app.use('', about);
app.use('', services);
app.use('', contact)

app.listen(PORT,(req,res)=>{
    console.log(`all is good in ${PORT}`)
})

