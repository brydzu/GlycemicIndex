(function (){

// var url = "http://undefined2055.eu/GlycemicIndex/foodTables.json";
// var request = new XMLHttpRequest();
// request.open("GET", url);
// request.send(null);

// why doesn't work when this variable is defined outside of showFoods? the same situation with other app...
//var foodTables = JSON.parse(request.responseText);

// temporary solution for testing
var foodTables = [{name: "Cheese", GI: 0}, {name: "Meats", GI: 0}, {name: "Broccoli", GI: 15},
{name: "Coconut", GI: 35}, {name: "Bread Montignac", GI: 34}, {name:"Bread ezekiel", GI: 35}, 
{name: "Bread white" , GI: 60}, {name: "Bread", GI: 55} ];

var foodBackgrundColor = document.querySelector("#results");

function showFoods() {
    
    //var foodTables = JSON.parse(request.responseText);
    var newInput = document.getElementById("textInput").value.toLowerCase();
    
    var matchingFoods = [];

    for(var i =0; i<foodTables.length; i++){
        if(foodTables[i].name.toLowerCase().indexOf(newInput)!==-1){  
            matchingFoods.push({
                name: foodTables[i].name,
                gIndex: foodTables[i].GI
            });
            // if (foodTables[i].GI<35){foodBackgrundColor.style.backgroundColor = "#009933";
            // } else if (foodTables[i].GI<55) { foodBackgrundColor.style.backgroundColor = "#ff9933";
            // } else {foodBackgrundColor.style.backgroundColor = "#cc0000";}
        }
    }
    //item
    matchingFoods.map(function (item){
        if(item.name.toLowerCase().indexOf(newInput)!==-1){
            var element = document.createElement("div");
            
            function changeColor(){
                var colorLabel;
                if(item.gIndex<36){
                    //colorLabel = "low";
                    foodBackgrundColor.style.backgroundColor = "#009933";
                }else if(item.gIndex<56){
                    //colorLabel = "medium";
                    foodBackgrundColor.style.backgroundColor = "#ff9933";
                }else{
                    //colorLabel = "high";
                    foodBackgrundColor.style.backgroundColor = "#cc0000";
                }
                //return colorLabel;
            }



            element.innerHTML = "<div>" +item.name+ "</div>"+ "<div style" +changeColor() +">" +item.gIndex+ "</div>";
            //remove Child
            document.getElementById("results").appendChild(element);
        }
    })

    document.getElementById("results").innerHTML = matchingFoods;
    }

document.getElementById("textInput").oninput = showFoods;
})()