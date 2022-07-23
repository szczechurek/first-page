const express = require('express');
const port = 8080; // you can use any port
const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('server on' + port);
