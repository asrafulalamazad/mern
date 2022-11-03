var azad= {shirt:true, shirtColor:'light pink'}


console.log(azad['shirt'])


// for (let item of azad){
//     console.log(item[value]);
// }

var azadPro={
    shirt: {
        color:"light pink",
        quality: "good",
        price: "400" 
   },
    pant: {
    color:"Gray",
    quality: "good",
    price: "900" 
    },

    swatter: {
    color:"black",
    quality: "normal",
    price: {
            no1:"1900",
            no2: "100"
    }
}

var x= azadPro['pant']['color']['price']['no1']

console.log(x);




























