// Define Variables
var fruits = "fruits";
var uppercaseFruits = "FRUITS";
var ten = 10;
var twenty = 20;
var Fruits = ["orange", "Apple", "Banana"];
// Test for equality and inequality with Strings
console.log("Is fruits is equal to fruits?");
console.log(fruits == "fruits");
console.log("\nIs Fruits is not equal to Fruits?");
console.log(fruits != "fruits");
// Test using Lowercase Function
console.log("\nIs FRUITS is equal to fruits after converting to lowercase?");
console.log(uppercaseFruits.toLowerCase() == "fruits");
console.log("\nIs FRUITS is not equal to fruits after converting to lowercase?");
console.log(uppercaseFruits.toLowerCase() != "fruits");
// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10");
console.log(20 < 10);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is Less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" Operators
// Using && (and)
console.log("\n twenry is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n Is twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR) 
console.log("\n Twenty is greater than 50 OR twenty is equal to 20 ");
console.log(twenty > 50 || 20 == 20);
console.log("\n Twenty is greater than 50 OR twenty is equal to 20 ");
console.log(twenty > 50 || 20 != 20);
// Test wheather an item is include in array
console.log("\n Is orange include in my Fruits array");
console.log(Fruits.includes("orange"));
//Not include
console.log("\n Is orange is not include in  my Fruits array");
console.log(Fruits.includes("orange"));
