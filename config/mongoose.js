const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hospital-Api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));

db.once("open", () => {
  console.log("Database connected!!!!!!:: Mongo-Db");
});

module.exports = db;