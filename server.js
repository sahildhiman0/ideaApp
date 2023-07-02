
const express = require('express');

const app = express();

const config = require('./configs/server.config')

app.listen(config.PORT,()=>{
    console.log("server has started");
})