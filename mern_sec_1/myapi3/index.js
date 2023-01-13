const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

const port= process.env.PORT;




app.listen(port, ()=>{console.log('server runnig port: '+ port);})


//app.listen(80, ()=>{console.log('server runnig 80 port');})