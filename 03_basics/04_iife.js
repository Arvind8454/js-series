// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); // javascript me function ko end karne ke liye semicolon ka use karte h
//  chai()

((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('Arvind')