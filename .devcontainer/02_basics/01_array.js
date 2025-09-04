// javascript me array-copy operation creates karta h 1.shallow copy aur deep copies
// A shallow copy of an object is a copy whose properties share the same reference
// A deep copy of an object is a copy whose do not share the same references

// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(6)
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));//-1
//  console.log(myArr.indexOf(4));//4


// const newArr = myArr.join()
// console.log(myArr);
// console.log( typeof newArr);

// console.log( myArr);


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2)//0,4,5