const app= require("./app.js")
const dotEnv= require('dotenv');

dotEnv.config({path: "./config.env"});

app.listen(process.env.RUNNING_PORT, function(){
    console.log('server port running. using dotEnv success')
})

// app.listen(8080, function(){
//     console.log("sucess")
// })