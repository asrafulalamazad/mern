const express= require('express');
const router = require('./src/routes/api');

const app= new express();

app.use('/api/v2', router);

module.exports=app;