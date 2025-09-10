let a = 16.6;
let b = 4;
let result;
// result = Math.sqrt(a);
// result = Math.pow(a, b);
// result = Math.floor(a);
let txt = "This is my last class";
// result = txt.split(" ");
// 
let arr = ["Asad", "Umar", "John Samith", "Sam"];
// result = arr.splice((arr.length-1), 1, "Lahore", "Karachi");
let arr2 = ["Lahore", "Karachi"];
// result = [...arr, ...arr2];
// console.log(result)
// console.log(result, arr)
const users = [
    {id: 1, name: "Adil", role: "admin"},
    {id: 2, name: "Ahsan", role: "user"},
    {id: 3, name: "Usman", role: "vendor"},
    {id: 4, name: "Ali", role: "user"},
    {id: 5, name: "Saad", role: "user"},
    {id: 6, name: "John Snow", role: "vendor"},
];
// result = users.filter(check); // returns a matching data
// result = users.find(check); // returns a top value 
let array1 = [2,3,4,5,6,7,8,9];
result = array1.map((element) => element*2 )
// let check = (users) => {
console.log(array1, result);

function check(users){
    if (users.role == "vendor") {
        return users;
    }
}
// console.log(result)