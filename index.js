const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = new express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Reservation = require("./models/reserve");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost/my_database", {
    useNewUrlParser: true
});

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/reserve", (req, res) => {
    res.render("reserve")
})

app.get("/tables", (req, res) => {
    res.render("tables")
})

app.post("/posts/store", async (req, res) => {
    await Reservation.create(req.body);
    res.redirect("/tables"); 
    })

app.get("/tableLink", async (req, res) => {
    const reservation = await Reservation.find({});
        res.render("tableLink", {
            reservation
        });
})

app.listen(3000, () =>{
    console.log("App listening on port 3000")
})