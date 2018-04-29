var express = require('express');
var app = express();

app.get('/',function(req,res){
	
	res.sendFile( __dirname + "/" + "newnode2.html" );
	
});

app.get('/double',function(req,res){
	
	response = {
      num1:req.query.num
   };
   
	console.log(response);
});

var server = app.listen(9898, function () {
   console.log('server started');

});