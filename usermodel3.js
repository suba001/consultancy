const { Binary } = require('bson')
const mongoose=require('mongoose')


const usermodel=new mongoose.Schema({
userid:String,
username:String,
  email:String,
  address:String,
  mob:String,
  altmob:String,
  sdate:String,
  edate:String,
  time:String,
  jid:String,
jname:String,
jprice:Number
})

exports.users3=mongoose.model("admin",usermodel,"admin")