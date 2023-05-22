const { Binary } = require('bson')
const mongoose=require('mongoose')


const usermodel=new mongoose.Schema({
  id:String,
  name:String,
  email:String,
  address:String,
  mob:String,
  altmob:String,
  sdate:String,
  edate:String,
  days:Number,
  time:String


})

exports.users2=mongoose.model("order",usermodel,"order")