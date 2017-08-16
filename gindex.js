(function (){

// var url = "http://localhost/foodTables.json";
// var foodTables = new XMLHttpRequest();
// foodTables.open("GET", url);
// foodTables.send(null);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}]


function showFoods() {
    // var newInput;
    // document.getElementById("textInput") = newInput;
    // var newResults;
    // document.getElementById("results") = newResults;

    // if(newInput == foodTables.name){
    //     document.getElementById("results") = foodTables.name +""+ foodTables.GI;
    // }
    alert("we received data!");
}

document.getElementById("textInput").oninput = showFoods;
})()