const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("ping", (req, res) => {
  res.send("pong");
});
app.get(["/"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  res.send(greeting);
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
