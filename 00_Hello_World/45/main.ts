// Define a function to create a car object in options...
function create_car(manufacturer, model, ...options){
    // Define a car object with the help of manufacturer and model
    let car = {
         manufacturer: manufacturer,
         model: model,
    };
    // Add multiple options to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota","Civic","Color : White","Year : 2023","Amount : 600000");

// Call the function to sure all of your information stored in car object
console.log(my_car);