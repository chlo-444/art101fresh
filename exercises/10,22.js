let count = 0
let colors = ["Orange", "Yellow", "Green"];

$("#magic-button").click( function (){
$("#magic-button").html (colors[count]);

count=(count + 1) % colors.length; });
