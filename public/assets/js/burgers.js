$(function() {

  $(".devoured").on("click", function(event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");

    const burgerEaten = {
      eaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerEaten
    }).then(
      function() {
        console.log("Burger Eaten", burgerEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger: $("#burg").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Added Burger!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});