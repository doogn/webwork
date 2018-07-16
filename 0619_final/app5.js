// supervisor app5.js 로 실행
// (supervisor 모드 - 파일이 바뀔 때마다 재시작할 필요 없이 자동으로 변경내용 적용해줌)

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getForm', function (req, res){
  res.sendfile("translate.html");
});

app.get('/getTranslateResult', function (req, res) {
  var context = req.query.context;
  var lang = req.query.lang;
  
  var translateResultArray = [];
  translateResultArray[0] = ["Hello.", "Nice to meet you.", "Thank you.", "Sorry.", "How much?"];
  translateResultArray[1] = ["こんにちは。", "はじめまして。", "ありがとうございました。", "ごめんなさい。", "いくらですか？"];
  var translateResult = translateResultArray[lang][context];

  res.send(translateResult)
});
