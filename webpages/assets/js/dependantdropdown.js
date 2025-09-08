const countries = [
    {id: 1, name: "Pakistan"}, // 0
    {id: 2, name: "Saudi Arabia"}, // 1
    {id: 3, name: "USA"}, // 2
];
const cities = [
    {id: 1, country_id: 2, name: "Riyad"},
    {id: 2, country_id: 1, name: "Lahore"},
    {id: 3, country_id: 1, name: "Peshawar"}
];
var i;
var countryList = document.getElementById("country");
for(i = 0; i < countries.length; i++){
    countryList.innerHTML += "<option value="+countries[i].id+">"
    + countries[i].name + "</option>"
}

function getCountry(){
    var country_id = document.getElementById("country").value;   
    var city = document.getElementById("city");   
    // console.log("Country id: " + country); 
    for(i = 0; i < cities.length; i++){
    
        if (country_id == cities[i].country_id) {
        city.innerHTML += "<option value="+cities[i].id+">"
        + cities[i].name + "</option>"
        }
}
}