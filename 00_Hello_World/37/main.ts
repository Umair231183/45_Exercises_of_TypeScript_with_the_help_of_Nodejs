// Making a Function
function make_shirt (size:string="Large", printMessage:string="I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//Calling a function with by-defult values
make_shirt ();

// Calling a function now with Medium size and by-defult value
make_shirt ("Medium")

// Calling a function now with Small size and also Different Print Message 
make_shirt ("Small" , "I Love JavaScript")