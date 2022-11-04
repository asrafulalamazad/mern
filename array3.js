var myArray = ['a', 'b', 'c', 'd', 'e']

var myArryPro = new Array('A', 'B', 'C', 'D');

// console.log(myArray); //no error
// console.log('======================');
// console.log(myArryPro); //no error

for (i = 0; i <= 1; i++) {

    for (value of myArray) {
        console.log(value)

    }
    console.log('======================');

    for (value of myArryPro) {
        console.log(value)
    }



}
//user for of loop