// declaring an array with name myCommutes

let myCommutes = ["metro bus", "UCSC taps bus", "friends"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "bus",
    route: "18",
    print: "butterfly",
    hasMiddleDoor: true,
    drivers: ["Malia, Michael, and Trader Joes Guy"],
}
let megaSentence;
megaSentence = "<p>My top two communtes from the array are: " + myCommutes[1] + "," + myCommutes[3] + "</P> "

megaSentence = megaSentence + "<p> My favourite commute possesses such characteristics: type:bus" + myFavotiteCommute.type: UCSC taps bus ", route number" + myFavouriteCommute.route + ", the best driver: "Malia" + myFavouriteCommute.drivers[0] +</p > 

$("#output").html(megaSentence); 
