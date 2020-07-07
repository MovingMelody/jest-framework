const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
var aylien = require("aylien_textapi");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("dist"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.post("/article", (req, res) => {
  const { url } = req.body;

  textapi.sentiment({ url }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    res.json(data);
  });
});


app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
