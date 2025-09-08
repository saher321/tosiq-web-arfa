applyTheme();
function applyTheme(){
    
    let appliedBGClr = localStorage.getItem("bg_clr");
    let appliedTextClr = localStorage.getItem("text_clr");
    document.body.style.backgroundColor = appliedBGClr;
    document.body.style.color = appliedTextClr;
    
    document.getElementById("bgclr").value = appliedBGClr;
    document.getElementById("textclr").value = appliedTextClr;
}

function applyBG(){
    let color = document.getElementById("bgclr").value;
    localStorage.setItem("bg_clr", color);
    document.body.style.backgroundColor = color;
}

function applyCLR(){
    let color = document.getElementById("textclr").value;
    localStorage.setItem("text_clr", color);
    document.body.style.color = color;
}