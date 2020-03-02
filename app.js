var express = require('express');
var app;

app = express();

app.get('/',function(req,res){
    res.send("response is send");
});

port = 5001

app.listen(port,function(){
    console.log("listening at port "+ port);
});