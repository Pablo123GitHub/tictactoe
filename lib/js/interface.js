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
        game._gameScoreX.push(`#${i}`);
        if (game.checkWinX()) {
          $("h1").replaceWith("<h1><span class='cross'>CROSSES WIN!</span></h1>");
        }
      } else {

        $(this).addClass("nought");
        game._gameScoreO.push(`#${i}`);
        if (game.checkWinO()) {
          $("h1").replaceWith("<h1><span class='nought'>NOUGHTS WIN!</span></h1>");
        }
      }

    })
  }






});
