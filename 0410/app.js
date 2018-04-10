var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost'
    , port: 3306
    , user: 'root'
    , password: 'root'
    , database: 'test'
});

var server = http.createServer(app).listen(800);
connection.connect();
console.log("hello nodejs");

app.get('/test', function (req, res) {
  res.send('hello 김의진');
});

connection.query('select * from member2',
  function (err, rows, fields){
    if (err) throw err;
    console.log(rows);
  }
);

app.get('/cssPractice', function (req, res) {
  res.sendfile('css_ex2.html');
});


app.get('/getAllMembers', function (req, res) {
  connection.query('select * from member',
    function (err, rows, fields){
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get('/getAuthcode1or2', function (req, res) {
  connection.query('select * from member where authcode in (1, 2)',
    function (err, rows, fields){
      if (err) throw err;
      res.send(rows);
    }
  );
});
