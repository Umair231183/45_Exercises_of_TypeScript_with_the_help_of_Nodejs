let userNames = ["Uamir", "Adil","Ahmad","Hamdan","Admin"]

userNames = []


if(userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}else{
    // Using ForEach Loop on an Arary

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see a status report ?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    
    }

})
}
