const express = require("express");
const ejs = require("ejs");
const app = new express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/reserve", (req, res) => {
    res.render("reserve")
})

app.get("/tables", (req, res) => {
    res.render("tables")
})

app.listen(3000, () =>{
    console.log("App listening on port 3000")
})