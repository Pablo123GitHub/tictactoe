describe("WhoWins", function() {

      var WhoWins = require('../../lib/js/whowins');
      var whoWins, gameScoreArrWins, gameScoreArrLoses;

      beforeEach(function() {
          whoWins = new WhoWins();
          gameScoreArrWins = ["#1", "#2", "#3"];
          gameScoreArrLoses = ["#1", "#2", "#4"];

        });

        it("return true when Win ", function() {
          expect(whoWins.declareWinner(gameScoreArrWins)).toEqual(true);
        });

        it("return false when Lose ", function() {
          expect(whoWins.declareWinner(gameScoreArrLoses)).toEqual(false);
        });

      });
