let  guestList = ["Umair","Adil","Abdullah","Ahmad","Hamdan"];

let dontinvite = guestList [0];

console.log(dontinvite, "nahi bulaya jaye");

guestList.splice(0,1,"Amir");

guestList.forEach(guest => console.log(`Assalam u alikum ${guest} would u like to dinner with me ? ` ));


