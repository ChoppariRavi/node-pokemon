const express = require("express");
const app = express();
const router = express.Router();

const path = require("path");

app.use(express.static(__dirname+"/pokeman/dist/"));
router.use('/', express.static(__dirname+"/pokeman/dist/", { redirect: false }));

app.get('*', (req, res)=>{
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname+'/pokemon/dist/index.html'));
  });
  
  app.listen(3939, ()=>{
    console.log("Listening on 3939");
  });