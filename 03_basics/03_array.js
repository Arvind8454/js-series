const user = {
    username: "arvind",
    price: 999,
    welcomeMessage: function(){
              console.log(`${this.username} , welcome to websites`);
//                console.log(this);
    }

 }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//  console.log(this);

// function chai(){
//     let username = "arvind"
//     console.log(this.username); // undefined

// }
// chai()

// function chai(){
//     let username = "arvind"
//     console.log(this.username); // undefined

//  }

// const chai = () => {
//     let username = "arvind"
//     console.log(this); 

//  }
 
//   chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// JAB HAM RETURN KEYWORD USE KARTE H TAB EXPLICIT USE KARTE H

// JAB HAM RETURN KEYWORD USE NHI KATE H TAB HM IMPILICIT RETURN USE KARTE H

// const addTwo = (num1, num2) =>  num1 + num2
    // const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ( {username: "arvind"})


console.log(addTwo(3,4))


