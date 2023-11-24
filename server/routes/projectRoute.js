const express = require('express')
const router = express.Router()
const{createProject,editProject,likeProject,getProjectById,getProject}=require('../controllers/projectController')
const{protect,admin}=require('../middleware/auth')

router.post('/createProject',protect,admin,createProject)
router.put('/editProject/:id',protect,admin,editProject)
router.patch('/likeProject/:id',protect,likeProject)
router.get('/getProjectById/:id',getProjectById)
router.get('/getProject',getProject)

module.exports=router