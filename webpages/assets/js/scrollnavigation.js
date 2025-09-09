let navLinks = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");

window.addEventListener('scroll', function (){
    let current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop - 60;
        if(scrollY >= sectionTop ){
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link)=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    })
})