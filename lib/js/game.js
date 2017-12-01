function Game(whowinsClass) {
  this._XToPlay = true;
  this._gameScoreX = [];
  this._gameScoreO = [];
  this._whoWins = whowinsClass;
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

    return this._whoWins.declareWinner(this._gameScoreX);

  },

  checkWinO: function() {
    return this._whoWins.declareWinner(this._gameScoreO);
  },



};

module.exports = Game;
