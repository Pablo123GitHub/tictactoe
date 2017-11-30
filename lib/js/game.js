function Game() {
  this._XToPlay = true;
  this._gameScoreX = [];
  this.WINNING_ARRAYS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
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
  },

  checkWinX: function() {
    if (this._gameScoreX.length < 3) return false;

    var count = 0;
    for (let i = 0; i < 10; i++) {
      count = 0;
      for (let j = 0; j < 4; j++) {
        if (this._gameScoreX.includes(this.WINNING_ARRAYS[i][j])) {
          count++
        }
        if (count == 3) {
          return true
        }
      }
    }
    return false;
  }
};

module.exports = Game;
