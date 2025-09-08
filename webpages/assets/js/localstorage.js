applyTheme();
function applyTheme(){
    let appliedBGClr = localStorage.getItem("clr");
    if(!appliedBGClr == ""){
        document.body.style.backgroundColor = appliedBGClr;
    }
}

function apply(){
    let color = document.getElementById("clr").value;
    localStorage.setItem("clr", color);
    document.body.style.backgroundColor = color;
}