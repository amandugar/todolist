//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const deleteItem = require("./routes/delete");
const about = require("./routes/about");
const home = require("./routes/home");
const homePost = require("./routes/homePost");
const customListName = require("./routes/customList");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://amandugar:amandugar@cluster0.y6axd.mongodb.net/todolistDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.get("/", home);
app.get("/about", about);
app.get("/:customListName", customListName);

app.post("/", homePost);

app.post("/delete", deleteItem);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
