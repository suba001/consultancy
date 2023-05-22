const { Binary } = require('bson')
const mongoose=require('mongoose')


const usermodel=new mongoose.Schema({
   id:String,
   jid:String,
   jname:String,
   jprice:Number,
})

exports.users1=mongoose.model("jewel",usermodel,"jewel")