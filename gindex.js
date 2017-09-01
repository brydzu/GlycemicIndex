(function (){

// var url = "http://localhost/foodTables.json";
// var foodTables = new XMLHttpRequest();
// foodTables.open("GET", url);
// foodTables.send(null);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}];

function showFoods() {
    
    var newInput = document.getElementById("textInput").value.toLowerCase();

    for(var i =0; i<foodTables.length; i++){
        if(newInput == foodTables[i].name.toLowerCase()){
        document.getElementById("results").innerHTML = foodTables[i].name +" "+ foodTables[i].GI;
        }
    }
}


document.getElementById("textInput").oninput = showFoods;
})()