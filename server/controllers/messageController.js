const messageModle =require('../models/messageModel')
const projectModel =require('../models/projectModel')

const mongoose=require("mongoose")
// @desc PostMessage
// @route POST/api/createMessage/:id(project ID)
// @access priveit
const createMessage=(async(req,res)=>{

    try {
        const user={
            id:req.user._id,
            name:req.user.name
        }
        const projectID=req.params.id

        const {text} =req.body
        console.log(projectID)
           
            await messageModle.create({
            text,
            user,
            projectID

        })
            
          
    .then(res.status(200).json('done'))

    } catch (error) {
        console.log(error)
    }
  
})
const editMessage=(async(req,res)=>{
    try {
        console.log('hi') 
        const id=req.params.id
        console.log(id) 
        const {text}=req.body
        const update=await messageModle.findByIdAndUpdate(id,{text},{new:true})
        

        const find=await messageModle.findById(id)
        //  console.log(find) 
        res.json(find)
        
    } catch (error) {
        res.json(error)
    }
   

})
const showMessage = (async(req,res)=>{
    try {
      const show =  await messageModle.find()
      let stack=[]
      if (show.length > 0) {
        for(i=0;i<show.length;i++){
            stack.push(show[i].text)
        }
        res.json(stack)
      } else {
        console.log('No documents found.');
      }
    //   res.status(200).json(show)
    } catch (error) {
        console.log(error)
    }
})
const likeMessage=(async(req,res)=>{
    try {
        const user={
            name:req.user.name,
            id:req.uer._id   
        }
       const id=req.params.id
       likes=await messageModle.findById(id)
       
      if(likes.like==user.id) {
        
      }
        
        if(likes.like==0){
        console.log(' likes are empty ')
        const update=   await messageModle.findByIdAndUpdate(id,{like:user.name},{new:true}).then(res.json('done'))
     
        }
        else{
            console.log(' likes are NOT empty ')
        }
        // const hi=likes.like
        // console.log('like 2 '+JSON.stringify(likes.like))
        //console.log('arry '+JSON.stringify(arry) )

        // console.log(likes.like)
       // const arry=likes.like
    } catch (error) {
        res.status(404).json(error)
    }
})
const DeleteMessage =async (req, res) => {
    try {
        const  id  = req.params.id
        const user={
            id:req.user._id,
           
        }
        const message = await messageModle.findById(id)
        if(!message) res.status(400).json("no message")
    
        if(user?.id.toString()==message?.user?.id.toString()){
            await messageModle.deleteOne({ _id: id })
            res.json(" deleted");
        }
        else{
            res.json( "user dosenot have accses ");
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports={
    createMessage,
    editMessage,
    likeMessage,
    showMessage,
    DeleteMessage
}