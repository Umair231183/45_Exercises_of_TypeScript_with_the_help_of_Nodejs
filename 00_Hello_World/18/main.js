var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its Original Order
var countriesToVisit = ["Chaina", "Denmark", "Brazil", "Palestine"];
console.log("original Order :", countriesToVisit);
// Print the Array in alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in its Original Order
console.log("still in Original Order:", countriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its Original Order
console.log("still in Original Order:", countriesToVisit);
// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array to show that its back to its original order
console.log("Back to Original Order", countriesToVisit.reverse());
// Print the array to show that its order has been changed in alphabetical order now 
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again the Original Array order Now in reverse order again 
console.log("Original Array reversed again:", countriesToVisit.reverse());
