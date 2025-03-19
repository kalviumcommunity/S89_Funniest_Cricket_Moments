const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(8080, async() => {
  try {
    await mongoose.connect("mongodb+srv://saimanideep765:9AVJAjf5w2DlQgsf@cluster0.oq36a.mongodb.net/");
    console.log("Server Connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
});