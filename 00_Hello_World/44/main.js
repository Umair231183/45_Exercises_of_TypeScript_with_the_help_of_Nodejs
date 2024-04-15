// Define a function rest  with respects Parameter  that accepts items arguments representing our sandwitch
function makeSandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwitch with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwitch\n");
}
// Call the function 3 items with 3 different number of arguments
makeSandwitch("Chicken", "Cheez", "Egg", "Potato");
makeSandwitch("Chicken", "cheez");
makeSandwitch("Chicken", "Cheez", "Bread", "Egg", "Potato", "Tomato", "Mayo", "Onion");
