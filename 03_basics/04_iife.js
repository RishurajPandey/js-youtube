// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('raj')