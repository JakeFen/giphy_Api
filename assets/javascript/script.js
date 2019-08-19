$(document).ready(function() {
  var animalArr = [
    "Dog",
    "Cat",
    "Bird",
    "Penguin",
    "Tiger",
    "Elephant",
    "GroundHog",
    "Snake"
  ];

  var buttonLoop = function() {
    for (var i = 0; i < animalArr.length; i++) {
      $(".button-holder").append(
        "<button value=" + animalArr[i] + ">" + animalArr[i] + "</button>"
      );
    }
  };
  buttonLoop();

  $("button").on("click", function() {
    var animal = $(this).val();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=3RjbOTb1kbvbW9wH33x7c75KHCUUMjWa&q=" +
      animal;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  });
});
