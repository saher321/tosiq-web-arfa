function inertItem(){
    var newItem = document.getElementById("new-item").value;
    // var itemList = document.getElementById("item-list");
    var itemList = document.getElementById("select-list");

    itemList.innerHTML += "<option>" + newItem + "</option>";
}