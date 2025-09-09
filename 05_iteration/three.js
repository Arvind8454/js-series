// for of 

// [" ", "", ""]
// [{}, {},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
     console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet} `)
}

// Map

const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")// yah output me nhi ayega kyuki map unique value ko print karta h aur india all ready print ho gya upper me
console.log(map);

for(const [key, value] of map){
//     console.log(key, ':-' , value);
}

const myObject = {
    'game1' : 'NFS',
    'game'  : 'Spiderman'
}

for (const [key, value] of myObject){
    console.log(key, ':-', value);
}
