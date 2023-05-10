const express = require('express'); // 라이브러리 첨부
const app = express(); // 라이브러리로 객체 생성

app.listen(8080, function() {
}); 

app.use(express.static('JoinUs'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/instant.html');
});