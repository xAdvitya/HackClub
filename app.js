var express = require('express');
var app;

app = express();

app.use(express.static('public'));

// manually sending files
/*
app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
});

app.get('/style.css',function(req,res){
    res.sendFile(__dirname+'/style.css');
});
*/
port = 5001

app.listen(port,function(){
    console.log("listening at port "+ port);
});