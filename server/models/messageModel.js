const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  { 
    user:{
      id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      name:{
        type:String
      }
    },
    projectID :{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Project'
    },
    text:{
      type:String
    },
    like:{
      type:[String],
      default:[]
    }
  }

)

module.exports = mongoose.model('Message', messageSchema)