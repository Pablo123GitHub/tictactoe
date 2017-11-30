function Game() {}


Game.prototype = {

  createGrid: function (x) {
    for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
        $("#container").append(`<div id= ${rows}${columns}  class='grid'></div>`);
      };
    };
    $(".grid").width(960 / x);
    $(".grid").height(960 / x);
  }
};

module.exports = Game;
