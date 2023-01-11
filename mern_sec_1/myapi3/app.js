const express = require('express');
const router = require('./src/router/api')


const app= new express();

app.use('/api/v3',router);
app.use('*', (req, res)=>{
    res.status(404).send('request not found');

})

module.exports= app;

