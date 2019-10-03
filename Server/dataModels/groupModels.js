//import mongoose
var mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;

//create userModel

var groupModel = new Schema({
    id : Number,
    name: String,
    admin: [String],
    channels: [{name:String,admin:[String]}],
    users : [String]
});

//export the module
module.exports =  mongoose.model("Group", groupModel);