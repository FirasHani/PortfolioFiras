const contactModel =require('../models/contactModel')
var nodemailer = require('nodemailer')
// @desc createContact
// @route POST/api/createContact
// @access public
const createContact=(async(req,res)=>{

    try {
        const {name,email,subject,phoneNumber,message} = req.body
        await contactModel.create({
            name,
            email,
            subject,
            phoneNumber,
            message
        }).then(res.json('Message Sent'))

        

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'testnode184@gmail.com',
            pass: process.env.PASWORED_SECRET,
      }
      
    })
    let email2='firas.doughlas@gmail.com'

    var mailOptions2 = {
      from: 'testnode184@gmail.com',
      to:'testnode184@gmail.com' ,
      subject: subject,
      text: message
    }
    var mailOptions = {
      from: 'testnode184@gmail.com',
      to: email,
      subject: subject,
      text: message
    }
    
    transporter.sendMail(mailOptions)
  
    transporter.sendMail(mailOptions2)


    } catch (error) {
        console.log(error)
    }
  
})
//
const getContacts = (async(req,res)=>{
  const data=await contactModel.find()
  res.json(data)
})
module.exports={
    createContact,
    getContacts
}