function Game() {
  this._XToPlay = true;
}


Game.prototype = {

  createGrid: function(x) {
    for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
        $("#container").append(`<div id= ${rows}${columns}  class='grid'></div>`);
      };
    };
    $(".grid").width(960 / x);
    $(".grid").height(960 / x);
  },

  addCross: function() {
    return "X";
  },

  addNought: function() {
    return "O";
  },

  play: function() {
    if (this._XToPlay) {
      return this.addCross();
    } else {
      return this.addNought();
    }
  }
};

module.exports = Game;
