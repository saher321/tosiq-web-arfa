let a = 16.6;
let b = 4;
let result;
// result = Math.sqrt(a);
// result = Math.pow(a, b);
// result = Math.floor(a);
let txt = "This is my last class";
// result = txt.split(" ");
// 
const users = [
    {id: 1, name: "Adil", role: "admin"},
    {id: 2, name: "Ahsan", role: "user"},
    {id: 3, name: "Usman", role: "vendor"},
    {id: 4, name: "Ali", role: "user"},
    {id: 5, name: "Saad", role: "user"},
    {id: 6, name: "John Snow", role: "vendor"},
];

result = users.filter(check); // returns a matching data
// result = users.find(check); // returns a top value 

function check(users){
    if (users.role == "vendor") {
        return users;
    }
}
console.log(result)