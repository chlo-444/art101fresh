
// declaring an array with name myBugs

let myBugs = [" beetles, ", " flies, ", " ants, ", " and spiders. "];
// declaring an object with name myFavouriteBugs

let myFavouriteBugs = {
    type: " green",
    how: " snapy ",
    look: " fuzzy.",

    kind: ["crunchy, big, and sticky"],
};
//tell us about venus fly traps
let megaSentence;
megaSentence = "<h2> Venus Fly Traps love to eat: " + myBugs[0] + myBugs[1] + myBugs[2] + myBugs[3] + "</h2>";

megaSentence = megaSentence + "<h3>  They are " + myFavouriteBugs.type + ", " + myFavouriteBugs.how + ", and " + myFavouriteBugs.look + "</h3>";

$("#output").html(megaSentence);

//lets add a button to declare how many flies have been eaten


let count = 0;

$("#declare").click(function () {

    count = count + 1;
    $("#declare").html(" Dead Fly Count: " + count);
});

