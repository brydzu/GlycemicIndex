(function (){

var url = "http://syntaxerror2055.eu/GlycemicIndex/foodTables.json";
var request = new XMLHttpRequest();

request.onload = requestListener();
request.open("GET", url);
request.send(null);

function requestListener() {

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

document.getElementById("textInput").focus();
document.getElementById("textInput").oninput = showFoods;
}
})()