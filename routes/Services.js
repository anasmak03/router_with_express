const { Router } = require('express')
const express = require('express')
const router = express.Router()
router.get('/Services',( req, res) =>{
    res.render('Services')
})
module.exports = router