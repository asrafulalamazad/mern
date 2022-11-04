var bangladesh = ['Feni', 'Comilla', 'Dhaka']
var india = ['Delhi', 'Kolkata', 'Mumbai']
var Pakistan = ['Islamabad', 'Lahore', 'Multan']
var usa = ['ny', 'ak', 'ws', 'dl']


var asia = [bangladesh, india, usa, Pakistan]; //multidimantional array

//console.log(asia); //no error
console.log(asia.length); //no error

// console.log(asia[2][3]);
console.log(asia[0][0]);

var [a, , , c] = asia;
console.log(c);