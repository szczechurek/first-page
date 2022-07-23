const express = require('express');
const PORT = 8080; // you can use any port
const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
