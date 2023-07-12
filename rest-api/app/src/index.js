const os = require("os");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan("combined"));
app.use(
  bodyParser.json({
    limit: "2MB",
  })
);

app.get("/", (req, res) => {
  return res.json({
    ping: true,
    hostname: os.hostname(),
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
