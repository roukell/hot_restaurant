const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservation = new Schema({
    name: String,
    phone: String,
    email: String,
    id: String

});

const Reservation = mongoose.model("reservation", reservation);

module.exports = Reservation