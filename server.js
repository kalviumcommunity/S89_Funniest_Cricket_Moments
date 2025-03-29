const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(8080,async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('server connected sucessfully')
  }catch(err){
    console.log(err);

  }
})
app.get('/',(req,res)=>{
  try{
    res.status(201).send({msg:"connected to mongodb"});

  }catch(err){
    res.status(500).send({msg:"something went wrong",err})
  }
})