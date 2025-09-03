showOptions();
function showOptions(){
    var steps = document.getElementById("steps");
    var array = [5, 10, 15, 20, 25, 30, 40];

    // for(var i = 0; i < array.length; i++){
    //     steps.innerHTML += "<option>" + array[i] + "</option>";
    // }

    //while loop
    var i = 0;
    while (i < array.length) {
        steps.innerHTML += "<option>" + array[i] + "</option>";

        i++;
    }

}

function printLines(){
    var val = document.getElementById("steps").value;
    var output = document.getElementById("output");
    // console.log(val)
    output.innerText = "";
    for(var i = 1; i<= val; i++){
        output.innerText += "This is my programming language \n"
    }
}