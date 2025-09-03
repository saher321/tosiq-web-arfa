var a = 3
var b = 5;
printTables(a, b);
function printTables(a, b){
    var tableBox = document.getElementById("table-list");

    for(var i = 1; i <= a; i++){
        for(var j = 1; j <= b; j++){
            console.log(i + " * " + j + " = " + i*j)
        }
    }
}