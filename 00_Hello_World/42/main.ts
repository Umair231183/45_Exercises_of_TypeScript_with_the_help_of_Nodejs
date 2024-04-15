// Define the function to show the magicians names 
function show_magicians(magicians:string[]){
  magicians.forEach(name => console.log(name));
}

// Function magicians great through .map() it will modify array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}





// Define an array of  magicians_names
let magicians_names = ["Umair", "Adil", "Ahmad", "The Greatest Allah"];


// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);


// Call show_magicians that show modified list magicians 
show_magicians(great_magicians);