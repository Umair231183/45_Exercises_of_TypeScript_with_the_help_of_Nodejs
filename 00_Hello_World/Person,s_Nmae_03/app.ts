let personName = "umair Amir";
console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char)=>char.toUpperCase()));
