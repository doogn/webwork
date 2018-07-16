// supervisor app4.js 로 실행
// (supervisor 모드 - 파일이 바뀔 때마다 재시작할 필요 없이 자동으로 변경내용 적용해줌)

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/checkItem', function (req, res) {
  var inputPrice = req.query.price;
  var item = "구매불가";
  var priceTable = [
    {name:"item1", price:1000},
    {name:"item2", price:5000},
    {name:"item3", price:10000},
    {name:"item4", price:30000},
    {name:"item5", price:50000},
    {name:"item6", price:100000},
    {name:"item7", price:500000}
  ];

  for(var i=0; i<priceTable.length; i++) {
    if(priceTable[i].price <= inputPrice) {
      item = priceTable[i].name;
    }
  }
  res.send(item);
});

app.get('/getItemFile', function (req, res){
  res.sendfile("item.html");
});
