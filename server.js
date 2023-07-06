
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const config = require('./configs/server.config');

const app = express();
// logic to connect to mongoDB and create an Admin user

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", ()=>{
    console.log("Error while connecting to DB,solve asap");
});

db.once("open", ()=>{
    console.log("DB is connected");
});


app.listen(config.PORT,()=>{
    console.log("server has started");
}); 