(function (){

// var url = "http://localhost/foodTables.json";
// var foodTables = new XMLHttpRequest();
// foodTables.open("GET", url);
// foodTables.send(null);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}, {name: "Bread Montignac", GI: 34}, {name:"Bread ezekiel", GI: 35}, 
{name: "Bread white" , GI: 60}, {name: "Bread", GI: 55} ];

function showFoods() {
    
    var newInput = document.getElementById("textInput").value.toLowerCase();
    
    for(var i =0; i<foodTables.length; i++){
        if(foodTables[i].name.toLowerCase().indexOf(newInput)!==-1){
        document.getElementById("results").innerHTML = foodTables[i].name +" "+ foodTables[i].GI;
        }
    }
}


document.getElementById("textInput").oninput = showFoods;
})()