
// declaring an array with name myCommutes

let myCommutes = ["metro bus", "UCSC taps bus", "friends", "walking"];
// declaring an object with name myFavouriteCommute

let myFavouriteCommute = {
    type: "bus",
    route: 18,
    print: "butterfly",
    hasMiddleDoor: true,
    drivers: ["Malia, Michael, and Trader Joes Guy"],
};
let megaSentence;
megaSentence = "<p> My top two communtes from the array are: " + myCommutes[0] + myCommutes[1] + myCommutes[2] + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p> My favorite commute possesses such characteristics: type-" + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver:" + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);