(function (){

var url = "http://undefined2055.eu/GlycemicIndex/foodTables.json";
var request = new XMLHttpRequest();
request.open("GET", url);
request.send(null);

// why doesn't work when this variable is defined outside of showFoods? the same situation with other app...
//var foodTables = JSON.parse(request.responseText);

// temporary solution for testing
// var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
// {name: "Coconut", GI: 35}, {name: "Bread Montignac", GI: 34}, {name:"Bread ezekiel", GI: 35}, 
// {name: "Bread white" , GI: 60}, {name: "Bread", GI: 55} ];

function showFoods() {
    
    var foodTables = JSON.parse(request.responseText);
    var newInput = document.getElementById("textInput").value.toLowerCase();
    
    var matchingFoods = [];

    for(var i =0; i<foodTables.length; i++){
        if(foodTables[i].name.toLowerCase().indexOf(newInput)!==-1){  
            matchingFoods += foodTables[i].name +" "+ foodTables[i].GI +"</p>";
            }
        }
    document.getElementById("results").innerHTML = matchingFoods;
    }

document.getElementById("textInput").oninput = showFoods;
})()