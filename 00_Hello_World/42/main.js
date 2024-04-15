// Define the function to show the magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of  magicians_names
var magicians_names = ["Umair", "Adil", "Ahmad", "The Greatest Allah"];
// Call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
// Call show_magicians that show modified list magicians 
show_magicians(great_magicians);
