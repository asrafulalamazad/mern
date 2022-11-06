import { Districts, upazilla  } from "./Districts.js";

Districts.map((Dist,u)=>{
    let DistrictsProfile= `Districts Name: ${Dist.name}`
    
    console.log(DistrictsProfile);
})
console.log("======================");

upazilla.map((upazilla,u)=>{
    let upazillaName= `Districts Name: ${upazilla.name}`
    
    console.log(upazillaName);
})