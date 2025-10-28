var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage(imageName) {

    if (colors[colorCount] == imageName) {
        $("body").append("<img width=50 src='images/" + imageName + ".png'>");
    }

}
function changeBackground(newColor) {
    $("body").css("background-color", newColor);

}

$(".color-button").click(function () {
    changeBackground(this.id);

});
function mood(moodycount) {
    let mood = "";
    if (moodycount < 5) { mood = "gresh and happy"; }
    else if ((moodycount >= 5) && (moodycount < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"; }
    return mood;
}

// the button part
let moodMessage = mood(count);

$("#needy-button").click(function () {

    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);

    changeBackground(colors[colorCount]);

    makeImage("Coral");

    count = count + 1;
    colorCount = colorCount + 1;
    if (colorCount == 4) { colorCount = 0; }
});
