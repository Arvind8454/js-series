// singleton
// object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Arvind yadav",
    [mySym]: "mykey1",   // ✅ use mySym here
    age: 18,
    location: "jaipur",
    email: "arvind@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)


JsUser.email = "arvind@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`);

}

console.log(JsUser.greeting);