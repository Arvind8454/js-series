const accountId = 123456
let accountEmail = "arvind@gamil.com"
var accountPassword = "1234"


// accountId = 2 // not allowed

accountEmail = "ar@123"
accountPassword = "123123"
accountCity = "Slicanvalley"

console.log(accountId);


/*
Preper not to use var
because of issues in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity])
