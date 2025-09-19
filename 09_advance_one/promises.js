// Do an async task
// DB calls, cryptography, network
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // vvi method to connect
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "chai", email: "chai@examp.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) { // ✅ fixed here
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("Error: Something went wrong"); // also good practice to handle rejection
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => { // this is important for chaining
        console.log(username);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password:
                "123"})

        }else {
            reject('Error: JS went wrong')

        }

    }, 1000)
});
async function consumePromiseFive(){
    try{
        const responsewait = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


fetch('https://api.github.com/users/Arvind8454')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);

})

.catch((error) => console.log(error))
