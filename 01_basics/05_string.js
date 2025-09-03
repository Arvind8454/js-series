const name = "Arvind"
const repoCount = 60

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is &{repoCount}`);

const gameName = new String("Arvind")

// console.log(gameName[0]);
// console.log(gameName.______proto___);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,1)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne.trim());
const url = "https://arvind.com/arvind%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes( 'sundar'))

console.log(gameName.split('-'));
