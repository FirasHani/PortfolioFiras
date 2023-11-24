// import express from 'express'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import cors from 'cors'
// messageController
const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require("cors")
const port = process.env.PORT || 5000
const app=express()

app.use(cors())

  connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/userRoute'))
app.use('/api',require('./routes/messageRoute'))
app.use('/api',require('./routes/projectRoute'))
app.use('/api',require('./routes/contactRoute'))


app.listen(port, () => console.log(`Server started on port ${port}`))