const app = require("./app");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5050;
const DB_URL = process.env.DATABASE_URL;

console.log(DB_URL);

mongoose.connect(DB_URL).then(() => {
  console.log("Database Connected Successfully".green.bold);
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.yellow.bold);
});