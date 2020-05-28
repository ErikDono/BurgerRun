$(document).ready(function () {

    // devour
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var neweaten = $(this).data("neweaten");

        var neweatenState = {
            eaten: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: neweatenState
        }).then(
            function () {
                console.log("changed burger to", neweaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // add a burger
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();
        console.log("clicked")
        var newburger = {
            name: $("#newburger").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );


    })





});
