(function (){

var url = "http://undefined2055.eu/GlycemicIndex/foodTables.json";
var request = new XMLHttpRequest();

request.onload = requestListener();
request.open("GET", url);
request.send(null);

function requestListener() {

// why doesn't work when this variable is defined outside of showFoods? the same situation with other app...
//var foodTables = JSON.parse(request.responseText);
// temporary table for testing
// var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Celery", GI: 15}, {name: "Broccoli", GI: 15},
// {name: "Coconut", GI: 35}, {name: "Bread Montignac", GI: 34}, {name:"Bread ezekiel", GI: 35}, 
// {name: "Acerola", GI: 20}, {name: "Lemon", GI: 20},
// {name: "Hazelnuts, Filberts, Barcelona nuts", GI: 25}, {name: "Hummus", GI: 25}, {name: "Cashew nut, Acajou", GI: 25},
// {name: "Celeriac, Knob celery, Turnip rooted celery", GI: 35}, 
// {name: "Celeriac, Knob celery, Turnip rooted celery (cooked)", GI: 105},
// {name: "Bread white" , GI: 60}, {name: "Bread", GI: 55}];

function showFoods() {
    
   var foodTables = JSON.parse(request.responseText);
    var newInput = document.getElementById("textInput").value.toLowerCase(),
        matchingFoods = [],
        resultsList = document.getElementById("results");

    // iterate throught JSON table objects and 
    //each time user input matches object name property, insert that object into new table matchingFoods     
    for(var i = 0, foodTableLength = foodTables.length; i<foodTableLength; i++){
        if(newInput !== "" && foodTables[i].name.toLowerCase().indexOf(newInput) !== -1){  
            matchingFoods.push({
                foodName: foodTables[i].name,
                gIndex: foodTables[i].GI
            });
        }
    }

    //don't display anything when user deleted his input
    while (resultsList.hasChildNodes()) {   
        resultsList.removeChild(resultsList.firstChild);
    }

    // generate new div for each case when user input matches any name of JSON table object
    matchingFoods.map(function(item){    
        
        if(item.foodName.toLowerCase().indexOf(newInput)!==-1){
            var element = document.createElement("div");
    
    // and assign one of three colors to each of these divs          
            function changeColor(){
                var className;
                if(item.gIndex<36){
                    element.className = "gindex gindex-low";
                }else if(item.gIndex<56){
                    element.className = "gindex gindex-medium";
                }else{
                    element.className = " gindex gindex-high";
                }
                return element.className;
            }      

     element.innerHTML = "<div style="+changeColor()+">"+
    '<span class = "displayedName">' +item.foodName+ '</span>'+
    " "+
    '<span class = "displayedIndex">' +item.gIndex+ '</span>'+
    "</div>";        

    resultsList.appendChild(element)
    }
    })
}

document.getElementById("textInput").oninput = showFoods;
}
})()