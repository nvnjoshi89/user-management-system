const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const { dirname } = require("path");

const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
// calling the body parser module with urlencoded method in the parenthesis we are passing object with property extended: true
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set('views',path.join(__dirname,'views'))

// load assests
app.use("/css", express.static(path.resolve(__dirname, "assests/css")));
app.use("/img", express.static(path.resolve(__dirname, "assests/img")));
app.use("/js", express.static(path.resolve(__dirname, "assests/js")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(3000, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
