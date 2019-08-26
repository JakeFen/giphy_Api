$(document).ready(function() {
  var animalArr = [
    "Dog",
    "Cat",
    "Penguin",
    "Tiger",
  ];

  // Loops threw animalArr and prints them to the screen as buttons
  var buttonLoop = function() {
    $(".button-holder").empty();

    for (var i = 0; i < animalArr.length; i++) {
      $(".button-holder").append(
        "<button class='arr-animal m-1' value=" + animalArr[i] + ">" + animalArr[i] + "</button>"
      );
    }
  };
  buttonLoop();

  // When submit button is clicked push the Value into the array and print to screen
  $(".submit-animal").on("click", function(event) {

    event.preventDefault();

    var guestsAnimal = $(".input-animal").val().trim();
    animalArr.push(guestsAnimal);
    buttonLoop();
    $(".input-animal").val("");
  })


// Pulls data from API and does something with it
  var animalAPI = function() {
    var animal = $(this).val();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=3RjbOTb1kbvbW9wH33x7c75KHCUUMjWa&q=" + $(this).val();
      animal;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $(".image-holder").empty();

      for(var i = 0; i < 10; i++) {
        var animalRating = response.data[i].rating;
        var imageDiv = $("<div class='p-2'>");
        var animalStill = response.data[i].images.fixed_height_still.url;
        var animalAnimate = response.data[i].images.fixed_height.url;
        // creating rating for images
        
        $(".image-holder").append(imageDiv);
        $(imageDiv).append("<p>" + animalRating + "</p><img class='gif' src='" + animalStill + "' data-still='" + animalStill + "' data-animate='" + animalAnimate + "' data-state='still'>");
        $(".image-holder").append();

      }

      // switches still image to animated image and back
      $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
    
        if(state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate")
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still")
        }
      });
    });
  };

  // when anything with class arr-animal is clicked run the variable animalAPI
  $(document).on("click", ".arr-animal", animalAPI);
});
