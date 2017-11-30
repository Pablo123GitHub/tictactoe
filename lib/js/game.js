function Game() {
  this._XToPlay = true;
}


Game.prototype = {

  addCross: function() {
    this._XToPlay = false;
    return "X";
  },

  addNought: function() {
    this._XToPlay = true;
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
