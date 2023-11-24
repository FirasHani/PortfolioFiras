const express = require('express')
const router = express.Router()
const{createMessage,editMessage,likeMessage,showMessage,DeleteMessage}=require('../controllers/messageController')
const{protect}=require('../middleware/auth')

router.post('/createMessage/:id',protect,createMessage)
router.put('/editMessage/:id',editMessage)
router.put('/likeMessage/:id',protect,likeMessage)
router.get('/showMessage',showMessage)
router.delete('/DeleteMessage/:id',protect,DeleteMessage)

module.exports=router