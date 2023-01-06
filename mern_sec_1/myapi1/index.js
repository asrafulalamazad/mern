const app= require("./app.js")
const dotEnv= require('dotenv');
//available path 
dotEnv.config({path: "./config.env"});


const portNo= process.env.RUNNING_PORT;
app.listen(portNo, function(){
  //  console.log('server port running. using dotEnv success')
    console.log("Running Port = "+portNo)
})

// app.listen(8080, function(){
//     console.log("sucess")
// })