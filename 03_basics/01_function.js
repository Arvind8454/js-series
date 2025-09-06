// Functions are one of the fundamental building blocks in JavaScript.

function sayMyName(){
    console.log("A")
    console.log("R")
    console.log("V")
    console.log("I")
    console.log("N")
    console.log("D")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }



function addTwoNumbers(number1, number2) {
//   let result = number1 + number2
//   return result  


return number1 + number2
    
}
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, 4); //7

const result = addTwoNumbers(3, 5)
// console.log("Result: " , result);

function loginUserMessage(username){

    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in `
} 

// console.log(loginUserMessage("Arvind")) 
// console.log(loginUserMessage(" arvind ")) // user koi value pass he nhi kare toh  undefined ayega


// function calculateCarPrice(...num1)
//[200,400,500]
function calculateCarPrice(val1,val2,...num1)//[500]
{
    return num1
}

// console.log(calculateCarPrice(200,400,500))

const user = {
    username: "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);



}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));