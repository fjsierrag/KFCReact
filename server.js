const express = require('express');

const app = express();

const port = process.env.PORT || 9000;

const host = process.env.HOST || 'localhost';

app.use(express.static('dist'));

app.listen(port,host,(err)=>{
  if(err){
    return console.error(err);
  }
  console.log(`server is listening on http://${host}:${port}`);
})
