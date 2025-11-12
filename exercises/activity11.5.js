let clickCount = 0

function checkMood(score) {
    if (score < 3) return "yearning";
    if (score < 6) return "cheery";
    if (score => 7) return "splendid";

}

function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    $("#mood-display").html(
        "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );

}


$("#mood-button").click(function () {

    showMood();
});


