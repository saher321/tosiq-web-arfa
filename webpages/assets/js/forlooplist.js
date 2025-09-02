var skills = [
    {name: "HTML", level: "Expert"},
    {name: "CSS", level: "Expert"},
    {name: "Bootstrap", level: "Expert"},
    {name: "Javascript", level: "Beginner"},
    {name: "React", level: "Intermediate"},
    {name: "Mern stack", level: "Beginner"},
    {name: "MS OFFICE", level: "Beginner"},
];
var list = document.getElementById("skills-list");
var i;
console.log(skills[0].level);

for(i = 0; i < skills.length; i++){
    list.innerHTML += `
        <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">` + skills[i].name + `</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  ` + skills[i].level + `
                </h6>
              </div>
            </div>
          </div>
    `
}