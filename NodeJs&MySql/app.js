var express=require('express');
var mysql = require('mysql');
var bodyParser = require('body-Parser');
var app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));

var connection = mysql.createConnection({
  //properties..
  host:'localhost',
  user:'root',
  password:'',
  database:'sampleDB'
});

connection.connect(function (error) {
  if(!!error){
    console.log('Error');
  }
  else {
    console.log('connected');
  }
});

//get
app.get('/api/myTable/findall', function(req, resp){
 //about mysql
connection.query('select * from myTable' , function(error , rows){
  resp.end(JSON.stringify(rows));
  });
});

//delete

app.delete('/api/myTable/delete/:id', function(req, resp){
 //about mysql
connection.query('delete from myTable where id= ?' ,[request.params.id], function(error , rows){
  resp.end(JSON.stringify(rows));
  });
});

//post

app.post('/api/myTable', function(req, resp){
 //about mysql
connection.query('insert into myTable(name, email, address) values(?,?,?)' [request.body.name,request.body.email,request.body.address] , function(error , rows){
  resp.end(JSON.stringify(rows));
  });
});

//put

app.put('/api/myTable', function(req, resp){
 //about mysql
connection.query('update myTable set name =?,email=?,address=? where id=?' , [request.body.name,request.body.email,request.body.address], function(error , rows){
  resp.end(JSON.stringify(rows));
  });
});








app.listen(8084);
