var output = document.getElementById("output");
var array = ["Shoes", "T-Shirts", "Kids", "Jeans"];

var i;
for (i = 0; i < array.length; i++) {
    output.innerHTML += "<li>" + array[i] + "</li>";
}
