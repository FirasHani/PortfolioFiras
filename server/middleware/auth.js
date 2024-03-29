// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel')

// const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1]

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET)

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select('-password')

//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401)
//       throw new Error('Not authorized')
//     }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized, no token')
//   }
// })
// const admin =(async(req,res,next)=>{
//   console.log(req.user.isAdmin)
//     if(req.user.isAdmin===true){
//       next()
//     }
//     else{
//       res.status(401).json('user is not admin')
//     }
// })



// module.exports={
//     protect,
//     admin
// }
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Not authorized', details: error.message });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
});

const admin = (req, res, next) => {
  if (req.user.isAdmin === true) {
    next();
  } else {
    res.status(401).json({ error: 'User is not an admin' });
  }
};

module.exports = {
  protect,
  admin,
};