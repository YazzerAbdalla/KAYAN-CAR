const express = require('express')
const router = express.Router()

router.post('/login' , (req, res) => {
    try{
        const data = req.body
        console.log(data)
        res.json({data}).status(200)
    }catch(e){
        console.error("error : " ,e.message)
    }
})

module.exports = router;
