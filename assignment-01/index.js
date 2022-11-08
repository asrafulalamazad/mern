import { Districts, upazilla } from "./Districts.js";

Districts.map((Dist) => {
    let DistrictsProfile = `Districts Name: ${Dist.name} and Number of Upzilla : ${ Dist.upazilla}`

    console.log(DistrictsProfile);
})





console.log("======================");

upazilla.map((upazilla) => {
    let upazillaName = `Districts Name: ${upazilla.name} and name of District: ${upazilla.Dist}`

    console.log(upazillaName);
})