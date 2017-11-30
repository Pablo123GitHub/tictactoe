// var game = require('./game.js');

$(document).ready(function() {

  game = new Game();

  $(".newGrid").click(function() {
    location.reload();
  });

  for (let i = 1; i < 10; i++) {
    $(`#${i}`).click(function() {
      var play = game.play();
      if (play == "X") {
        $(this).addClass("cross");
      } else {
        $(this).addClass("nought");
      }
    })
  }
});
