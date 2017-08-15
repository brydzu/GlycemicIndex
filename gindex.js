(function (){

// var url = "http://localhost/foodTables.json";
// var foodTables = new XMLHttpRequest();
// foodTables.open("GET", url);
// foodTables.send(null);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}]


function showFoods() {
    alert("The value of the input field was changed.");
}

document.getElementById("userInput").oninput = showFoods;
})()