// this will hold the schema for the user 
// it explains the different fields of use and how it will be stored in the mongo database.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true 
    },
    userId:{
        type : String ,
        required : true,
        unique : true 
    },
    password : {
        type: String,
        required : true
    },
    emailId :{
        type : String,
        unique:true,
        required: true,
        minLength:10,
        lowercase:true

    },
    userType : {
         type : String,
        unique:true,
        default : "CUSTOMER",
        enum:["customer","admin"]

    }
},{timestamps: true});