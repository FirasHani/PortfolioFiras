const project =require('../models/projectModel')
const  message = require('../models/messageModel')
const asyncHandler = require('express-async-handler')

// @desc Create Project
// @route POST/api/createProject
// @access priveit
const createProject = asyncHandler(async(req,res)=>{
    const {projectName,projectDescription} = req.body
    await project.create({
        projectName,
        projectDescription
    }).then(res.json('done'))
})
// @desc Edit Project
// @route PUT/api/editProject
// @access priveit
const editProject=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const {projectName,projectDescription} = req.body
    console.log(id +' '+projectName+ '  '+projectDescription)
    await project.findByIdAndUpdate(id,{projectName,projectDescription},{new:true})
    .then(res.json('done'))
})
// @desc Like Project
// @route PUT/api/likeProject
// @access priveit
const likeProject = (async(req,res)=>{
    const user={
        id:req.user._id,
        name:req.user.name
      }
      const{id:projectId}=req.params
      const like=await project.findById(projectId)
      if(like.projectLieks.includes(user.id)) {
        return res.status(404).send(`No post with id:`);
     }
     else{
        like.projectLieks.push(user.id)
        console.log(like.projectLieks)
       await project.findByIdAndUpdate(projectId,{projectLieks:like.projectLieks},{new:true})
     .then(res.json('you liked a project'))  
     }
})
const getProjectById =(async(req,res)=>{
    try {
        const test=req.params.id 
        // const find=test
        const showProject=await project.findById(test) 
        const showMessage=await message.find({projectID:test})
        // let stack=[]
        // for(let i=0; i<showMessage.length; i++){
        //     //console.log(showMessage[i].text)
        //     stack.push(showMessage[i].text)
        // }
       // console.log(showMessage[0].user.name)
        res.json({showMessage,showProject})
    } catch (error) {
        console.log(error)
    }

    

})
const getProject =(async(req,res)=>{
    try {
        const showProject=await project.find()
        res.json(showProject)
    } catch (error) {
        console.log(error)
    }
})


module.exports={
    createProject,
    editProject,
    likeProject,
    getProjectById,
    getProject
}