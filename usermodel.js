const { Binary } = require('bson')
const mongoose=require('mongoose')


const usermodel=new mongoose.Schema({
   Name:String,
   Pass:String
   
})

exports.users=mongoose.model("userid",usermodel,"userid")