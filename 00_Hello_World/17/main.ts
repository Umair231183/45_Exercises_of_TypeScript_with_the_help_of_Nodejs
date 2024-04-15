// Creating a Guest List Array
let guestList = ["Umair", "Adil" , "Ahmad", "Hamdan"];

//Making variable for those guest who can,t come
let dontCome = guestList[0];

//Print the name of guest who can,t come
console.log(dontCome, "Nahi a sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0 ,1 , "Amir");

// Message Print for Bigger Table
console.log ("Good News! We have found a bigger table for Dinner");

// Adding a new guest at starting index of array
guestList.unshift("Ali");

//  Adding a new guest at ending index of array
guestList.push("Zain");

// Get  a  middle index of  our guest list array

let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0 , "Osama");

console.log("Updated List of our Guests");

// Sending a invitation to our guests one by one with their names
guestList.forEach(oneguest => console.log(` Salam ${oneguest}, would you like to dinner with me`));

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, The new table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can,t invite you to dinner `);
}

// Sending the invitations to the last two guest on the list 

console.log("Invitations to the last 2 Guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner `))

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);


