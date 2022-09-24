//for in loop
var person = {
    fname: "karthik",
    lname: "John",
    age: 26
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }

 //for loop
 var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

//for each loop

var names = ["john", "ramesh", "karthi", "sam", "vignesh"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}

//for of loop
// array
const students = ['John', 'Sam', 'vignesh'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}