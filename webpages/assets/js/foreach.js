let array1 = ["Shoes", "T-shirts", "Kids", "Makeup", "Computer"];

let countries = [
    {id: 1, name: "Pakistan"}, // 0
    {id: 2, name: "Saudi Arabia"}, // 1
    {id: 3, name: "USA"}, // 2
];

array1.forEach((item, i) => {
    console.log(i+1 + " " + item);
});
let output = document.getElementById("output");

countries.forEach((item) => {
    output.innerHTML += `<li> ${item.name} </li>`;
})