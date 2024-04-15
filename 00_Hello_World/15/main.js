var guestList = ["Umair", "Adil", "Abdullah", "Ahmad", "Hamdan"];
var dontinvite = guestList[0];
console.log(dontinvite, "nahi bulaya jaye");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Assalam u alikum ".concat(guest, " would u like to dinner with me ? ")); });
