(function (){

// var url = "http://localhost/foodTables.json";
// var foodTables = new XMLHttpRequest();
// foodTables.open("GET", url);
// foodTables.send(null);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}];

// is texinput accesible from html wihout passing it as parameter to showFoods?


function showFoods() {
    // var newInput = document.getElementById("textInput").innerHTML;
    var newInput = document.getElementById("textInput").value;
    
    // for(var i =0; i<foodTables.length; i++){
    //     if(newInput == foodTables[i].name){
    //     document.getElementById("results").innerHTML = foodTables[i].name +""+ foodTables[i].GI;
    //     }
    // }

    // document.getElementById("results").innerHTML = newInput;
    console.log('u write'+ newInput);
}

document.getElementById("textInput").oninput = showFoods;
})()