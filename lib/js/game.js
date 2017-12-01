function Game() {
  this._XToPlay = true;
  this._gameScoreX = [];
  this._gameScoreO = [];
  this.WINNING_ARRAYS = [
    ["#1", "#2", "#3"],
    ["#4", "#5", "#6"],
    ["#7", "#8", "#9"],
    ["#1", "#5", "#9"],
    ["#3", "#5", "#7"],
    ["#1", "#4", "#7"],
    ["#2", "#5", "#8"],
    ["#3", "#6", "#9"]
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

  addIDToX: function(x) {
    this._gameScoreX = [x];
    return this._gameScoreX;

  },

  checkWinX: function() {

    return this.declareWinner(this._gameScoreX);

  },

  checkWinO: function() {
    return this.declareWinner(this._gameScoreO);
  },

  declareWinner: function(scoreArr) {
    if (scoreArr.length < 3) return false;

    var count = 0;
    for (let i = 0; i < 8; i++) {
      count = 0;
      for (let j = 0; j < 3; j++) {
        if (scoreArr.includes(this.WINNING_ARRAYS[i][j])) {
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
