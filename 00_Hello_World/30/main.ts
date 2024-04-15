// Creating a Array
let userNames = ["Umair","Ahmad", "Admin","Hamdan","Adil"];

// Using ForEach Loop on an Arary

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report ?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    
    }

})



