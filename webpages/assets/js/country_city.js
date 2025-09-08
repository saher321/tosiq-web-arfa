const countries = [
    {id: 1, name: "Pakistan"}, // 0
    {id: 2, name: "Saudi Arabia"}, // 1
    {id: 3, name: "USA"}, // 2
];
const cities = [
    {id: 1, country_id: 2, name: "Riyad"},
    {id: 2, country_id: 1, name: "Lahore"},
    {id: 3, country_id: 1, name: "Peshawar"},
    {id: 4, country_id: 3, name: "LA"}
];
let table_item = document.getElementById("data-list");
for(let i = 0; i < countries.length; i++){
    let sr_no = "";
    let country_name = "";
    let city_name = "";
    for(let j = 0; j < cities.length; j++){
        if (countries[i].id == cities[j].country_id) {

            sr_no += i+1;
            country_name += countries[i].name;
            city_name += cities[j].name 
        }
        table_item.innerHTML += `
        <tr>
            <td> ${ sr_no } </d>
            <td> ${ country_name } </d>
            <td> ${ city_name } </d>
        </tr>
        `
    }
}