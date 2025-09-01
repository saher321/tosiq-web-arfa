//***** DATA TYPES */
// numbers: 1234, 2.54, 30000000000
// string: "This is text"
// array: myarray = ["Apple", "Mango", "Orange", "Grapes"]; // myarray[0]
// object: user = { name: "Ahmad", email: "a@gmail.com" } // user.email
// boolean: true, false
// ***********

var a = 10;
var b = 20;
var c = a + b + 3 + (a*b + b);
console.log(c);

function getResult(){
    var output  = document.getElementById("output")
    var units   = document.getElementById("units").value;

    var unitPrice   = 11;
    var tax         = 255;
    var fuelTax     = 305;

    if (units <= 200) {
        output.innerText = units * unitPrice + tax + fuelTax;
    } else if (units > 200 && units <= 250) { // range defined
        unitPrice = 22;
        output.innerText = units * unitPrice + tax + fuelTax;
    } else if (units > 250 && units <= 300) { // range defined
        unitPrice = 44;
        output.innerText = units * unitPrice + tax + fuelTax;
    } else {
        unitPrice = 49;
        output.innerText = units * unitPrice + tax + fuelTax;        
    }
}