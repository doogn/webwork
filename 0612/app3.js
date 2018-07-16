// supervisor app3.js 로 실행
// (supervisor 모드 - 파일이 바뀔 때마다 재시작할 필요 없이 자동으로 변경내용 적용해줌)

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/request1', function (req, res) {
  res.send("response1");
});

app.get('/request2', function (req, res) {
  res.send("response2");
});

app.get('/request3', function (req, res) {
  res.send("response3");
});

app.get('/getFile', function (req, res){
  res.sendfile("requestTest.html");
});
// http://localhost/getFile 로 request
// ajax.html을 서버를 통해서 열지 않고 로컬 PC에서 직접 열면 Error 발생함
// "No 'Access-Control-Allow-Origin' header is present on the requested resource.
// Origin 'null' is therefore not allowed access."
