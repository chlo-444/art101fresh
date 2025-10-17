let totalNumber = 0;

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];//new line to add


$("#needy-button").click(function () {

    let reminder = count % colors.length;


    $("#needy-button").html("Clicks: " + count + "color:" + colors[count]);
    //new line to add

    $("body").css("background-color", colors[reminder]);
    count = count + 1


});

// once it is clicked
// add one to the total number

//show the total number
// in our button
// show"clicked total number times"


// a top limit