// Define a function rest  with respects Parameter  that accepts items arguments representing our sandwitch
function makeSandwitch(...items:string[]){
    console.log("\nMaking a Sandwitch with the following items: \n");

    items.forEach(singleItem => console.log( "-" + singleItem));


    console.log("\nNow Enjoy Sandwitch\n");
}

// Call the function 3 items with 3 different number of arguments

makeSandwitch("Chicken","Cheez","Egg","Potato");

makeSandwitch("Chicken","cheez");

makeSandwitch("Chicken","Cheez","Bread","Egg","Potato","Tomato","Mayo","Onion");