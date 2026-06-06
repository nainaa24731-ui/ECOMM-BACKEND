const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors')
let connection=require('./config/db')
const limiter=require('./middleware/rateLimit');
let productroutes= require('./routes/productroutes')
let authroutes=require('./routes/authroutes')


const app=express();
const port=process.env.PORT;

//middleware
app.use(express.json())
app.use(cors())
app.use(limiter)

app.use('/products',productroutes)
app.use('/auth',authroutes)

// app.post('/products/bulk',async (req,res)=>{
//   try {
//     await products.insertMany([req.body])
// res.json({msg:"products saved"})
//   } catch (error) {
//     res.json(error.message)
//   }
// })

app.listen(port,()=>{
  console.log(`the server is running on ${port}`)
  connection();
})
