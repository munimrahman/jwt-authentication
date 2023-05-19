const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser("process.env.COOKIE_SECRET"));

app.get("/", (req, res) => {
  res.send("Hello JWT Auth Server");
});

// Routes
app.use("/", authRouter, productRouter);

app.all("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

module.exports = app;
