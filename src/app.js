const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Job Portal Server");
});

// Routes
app.use("/", authRouter, productRouter);

app.all("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

module.exports = app;
