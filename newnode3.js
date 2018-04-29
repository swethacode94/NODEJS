var express = require('express');
var app = express();

var mysql = require('mysql');
	var pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: 'swetha',
		database: 'emp'
		
	});
	
	var createTable = "create table IF NOT EXISTS employee (id int(11) NOT NULL AUTO_INCREMENT,name varchar(20) NOT NULL,age int NOT NULL,mobile bigint NOT NULL,"+
	"primary key(id)) ENGINE=InnoDB DEFAULT CHARSET=latin1" ;
	
	var insertTB = "insert into employee(name,age,mobile) values(?,?,?) ";
	
	var updaterecord = 'update employee set age=? ,mobile=? where name = ? ';
	
	var selectrecord = 'select * from employee where age = ?';

	var deleterecord = 'delete from employee where name = ?';
	
	
app.get('/',function(req,res){
	
	res.sendFile(__dirname +"/"+ "newnode3.html");
});

app.get('/insert',function(req,res){
	
	var a = req.query.name;
	var b = req.query.age;
	var c = req.query.mob;
	insertRow(a,b,c);
});

app.get('/update',function(req,res){
	var a = req.query.name;
	var b = req.query.age;
	var c = req.query.mob;
updatetab(b,c,a);
});

app.get('/select',function(req,res){
	
var b = req.query.age;

selectrow(b);
});

app.get('/delete',function(req,res){
	
	var a = req.query.name;
deleterow(a);
});


var server = app.listen(2000, function () {
  createTB();
});


	
function createTB(){
	pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
        console.log('Table created!');
    }
  });
	
	});
}

function insertRow(a,b,c){
	pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(insertTB,[a,b,c],  function(err){
    if(err) throw err;
    else {
        console.log(a+' inserted!');
    }
  });
	
	});
}


function updatetab(b,c,a){
	
	pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(updaterecord,[b,c,a],  function(err){
    if(err) throw err;
    else {
        console.log(' updated!');
    }
  });
	
	});
}

function selectrow(b){
	pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(selectrecord,[b],  function(err,result){
    if(err) throw err;
    else {
        console.log(result);
    }
  });
	
	});
	
}

function deleterow(a){
	pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(deleterecord,[a],  function(err,result){
    if(err) throw err;
    else {
        console.log("deleted");
    }
  });
	
	});
	
}