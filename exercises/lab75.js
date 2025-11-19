$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more");

    if ($(this).html() == "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }

});
$("#mystery").click(function () {
    $("#secret-text").fadeToggle(600);
});