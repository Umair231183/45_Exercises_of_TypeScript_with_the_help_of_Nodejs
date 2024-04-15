// Define the function to show the magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of  magicians_names
var magicians_names = ["Umair", "Adil", "Ahmad"];
// Making a copy of Original array through .slice() function
var copy_magician_names = magicians_names.slice();
// modify the copied array to include 'The Great' with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show arrays Original and Copied 
// Original
console.log("Original Array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
