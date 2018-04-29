var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.sendFile(__dirname + "/" + "newnode1.html" );

	
});

app.get('/double_get',function(req,res){
	
	var myText = req.query.num;
	res.send(myText);
	
	
});

var server =app.listen(9999,function(){
	console.log("server started");
	
});

