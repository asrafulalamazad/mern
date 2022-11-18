var myMap = new Map();

myMap.set('a1','one')
myMap.set('a2','two')
myMap.set('a3','three')
myMap.set('a4','four')
myMap.set('a5','five')
myMap.set('a6','six')

for (let v of myMap.values()) {

    console.log(v);
}
myMap.delete("a1")

console.log(".................")

for (let v of myMap.values()) {


    console.log(v);
}

console.log(".................")
myMap.clear()
for (let v of myMap.values()) {


    console.log(v);
}