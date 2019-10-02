//import mongoose
var mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;

//create userModel

var userModel = new Schema({
    id : Number,
    name: String,
    password: String,
    group: String,
    email: String,
    imgpath: String
});

//export the module
module.exports =  mongoose.model("User", userModel);