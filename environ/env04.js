
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
        // replace one image per click
        $(`#flyguy${count === 1 ? "" : count}`).attr("src", "skullpic.webp");
    } else {
        // stop increasing and show RIP when limit reached
        $("#declare").html("RIP");
        // disable the button while we show RIP and reset images
        $("#declare").prop("disabled", true);

        // after a short delay, restore the button text, reset images, and re-enable
        setTimeout(function () {
            // restore the flyguy images back to the original
            for (let i = 1; i <= limit; i++) {
                const sel = `#flyguy${i === 1 ? "" : i}`;
                $(sel).attr("src", "flyguy.jpeg");
            }

            // restore button label (match original HTML spacing)
            $("#declare").html(" KILL THE FLIES");
            $("#declare").prop("disabled", false);

            // reset counter so user can start again
            count = 0;
        }, 1500); // 1.5s delay

    }
});