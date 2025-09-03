// ********************************************

//Stack (Primitive) Heap(Non-Primitive)


let myYoutubename = "arvindyadavdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@123.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "arvind@google.com"
console.log(userOne.email);
console.log(userTwo.email);