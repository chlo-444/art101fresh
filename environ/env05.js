
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
const limit = 3;

$("#declare").click(function () {
    count++;

    if (count <= limit) {
        const flyId = `#flyguy${count === 1 ? "" : count}`;

        // Replace image
        $(flyId).attr("src", "skullpic.webp");

        // Move the fly to a random position on screen
        const newLeft = Math.random() * 500;
        const newTop = Math.random() * 300;

        $(flyId).animate({
            left: newLeft + "px",
            top: newTop + "px"
        }, 800); // 800ms animation
    } else {
        $("#declare").html("RIP");
        count = 0;
    }
});



