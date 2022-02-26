const express = require('express')
const router = express.Router()

router.get('/Contact', (req,res)=>{
    res.render('Contact')
})

module.exports = router