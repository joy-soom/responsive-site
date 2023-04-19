//server.js 파일
const express = require("express");
const app = express();
const PORT = 8282;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
