function randomPastel() {
    const hue = Math.floor(Math.random() * 360);
    return hsl(${ hue } 100 % 92 %);
}


let counter = 0;
function nextId() {
    counter += 1;
    return cr - ${ counter };
}


function creatureCardHTML({ id, name, desc }) {
    const bg = randomPastel();
    return
    <div class="card" data-id="${id}" style="background:${bg}">
        <button class="remove" type="button" aria-label="remove">X</button>
        <div class="badge">Creature #${counter}</div>
        <strong class="card-name">${name}</strong>
        ${desc ? <div class="card-desc">${desc}</div> : ""}
    </div>
        ;
}

function setStatus(msg) {
    $("#status").html(msg);
}

$(function () {
    $("#crAdd").on("click", function () {
        const name = $("#crName").val().trim();
        const desc = $("#crDesc").val().trim();

        if (!name) {
            setStatus("Please enter a name.");
            return;
        }

        const id = nextId();
        $("#creature-list").append(
            creatureCardHTML({ id, name, desc })
        );

        $("#crName").val("");
        $("#crDesc").val("");
        setStatus("Creature added!");
    });

    $("#clearAll").on("click", function () {
        $("#creature-list").html("");
        setStatus("Garden cleared.");
    });


    $("#creature-list").on("click", ".remove", function (e) {
        $(this).closest(".card").remove();
        setStatus("Creature removed.");
    });


    $("#creature-list").on("click", ".card", function (e) {
        if ($(e.target).is(".remove")) return;
        const now = $(this);

        now.toggleClass("pulse");

        now.css("background", randomPastel());
        setTimeout(() => now.removeClass("pulse"), 350);
    });


    $("#creature-list").on("mouseenter", ".card", function () {
        $(this).addClass("spin");
        setTimeout(() => $(this).removeClass("spin"), 400);
    });
});