var a = 10;
var b = 10;
printTables(a, b);
function printTables(a, b){
    var tableBox = document.getElementById("table-list");

    for(var i = 1; i <= a; i++){
        var innerValue = "";
        for(var j = 1; j <= b; j++){ //
           innerValue += i + " * " + j + " = " + i*j + "<br>"
        }
        tableBox.innerHTML += `
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">` +
                        innerValue
                        + `</h5>
                    </div>
                </div>
            </div>
        `
    }

}