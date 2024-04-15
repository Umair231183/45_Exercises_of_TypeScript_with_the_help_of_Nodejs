// Define the function to show the magicians names 
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
  }
  
  // Function magicians great through .map() it will modify array
  function make_great(magicians:string[]){
     return magicians.map(name => `The Great ${name}`);
  }
  
  // Define an array of  magicians_names
  let magicians_names = ["Umair", "Adil", "Ahmad"];

// Making a copy of Original array through .slice() function
let copy_magician_names = magicians_names.slice();

// modify the copied array to include 'The Great' with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show arrays Original and Copied 

// Original
console.log("Original Array\n")
show_magicians(magicians_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);