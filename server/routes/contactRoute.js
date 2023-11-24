const express = require('express')
const router = express.Router()
const{createContact,getContacts}=require('../controllers/contactController')


router.post('/createContact',createContact)
router.get('/getContacts',getContacts)



module.exports=router