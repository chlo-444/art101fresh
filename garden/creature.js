// a variable for storing names 

// when the button is clicked

$("#add-creature").click(
    function () {

        // variable for storing names

        let crName = $("#crName").val();
        $("#creature-list").append(crName);
        //here our actions when the button is clicked

    });



