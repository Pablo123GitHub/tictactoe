function WhoWins() {
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

WhoWins.prototype = {

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

module.exports = WhoWins;
