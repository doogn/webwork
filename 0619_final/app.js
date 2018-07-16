var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getForm', function (req, res){
  res.sendfile("carPrice.html");
});

app.get('/getCarPrice', function (req, res) {
  var maker = req.query.maker;
  var color = req.query.color;

  var makerArray = [2100, 1300, 1500, 3500, 3200];
  var colorArray = [100, 120, 200, 130, 80];

  var estimatePrice = makerArray[maker] + colorArray[color];
  var estmiateResult = estimatePrice + "만원";

  res.send(estmiateResult)
});
