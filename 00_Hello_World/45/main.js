// Define a function to create a car object in options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Define a car object with the help of manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add multiple options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
var my_car = create_car("Toyota", "Civic", "Color : White", "Year : 2023", "Amount : 600000");
// Call the function to sure all of your information stored in car object
console.log(my_car);
