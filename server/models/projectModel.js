const { default: mongoose, model } = require("mongoose");

const projectModel =mongoose.Schema(
{
    projectName:{
        type:String
    },
    projectDescription:{
        type:String
    },
    projectLieks:{
        type:[String],
        default:[]
    },
    projectComment:{
        type:[],
        default:[]
    },
    prjectImage:{
        type:String
    }

    
}

)

module.exports = mongoose.model('Project', projectModel)