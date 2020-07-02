//Module imports
const express = require('express');
const HTTP_PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
app.post('/addProduct', (req, res) => {
  const {name, description, category, imageURL} = req.body;
  if(!name || !description || !category){
    return res.status(400).json({
      type: 'error',
      message: 'All fields need to be completed'
    })
  }
  res.status(200).json({
    type: 'success',
    message: 'Product Added Successfully'
  })
})

//Server Listening
app.listen(HTTP_PORT, (port = HTTP_PORT) => {
  console.log(`Server Listening on ${port}`);
})