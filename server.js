const express=require('express')
const cors=require('cors')

const app=express()

const {connectDB}=require('./connection')
const {users}=require('./usermodel')
const {users1}=require('./usermodel1')
const {users2}=require('./usermodel2')
const {users3}=require('./usermodel3')

app.use(express.json())
app.use(cors())

app.post('/insert',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users.create(body);
    res.json(data);
})

app.post('/ins',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users1.create(body);
    res.json(data);
})

app.get('/get/:id',async(req,res)=>{
    //  console.log("sdfc");
     // console.log(req.params);
      const id= req.params.id;
      
      const data=await users1.find({id:id});

          res.json(data)
      })


app.post('/inse',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users2.create(body);
    res.json(data);
})

app.post('/adins',async(req,res)=>{
    // console.log("inserted");
    const body=req.body;
    // console.log(body)
    const data=await users3.create(body);
    res.json(data);
})

app.get('/adminget',async(req,res)=>{
    const data=await users3.find();
    console.log(data);
    res.json(data);
})



app.listen(4000,()=>{
    console.log("server is started at port number 4000");
connectDB()
.then((e)=>{
})
.catch((e)=>{
    console.log("mongodb error occured!!!");

})

})
