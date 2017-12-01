describe("Game", function() {

  var Game = require('../../lib/js/game');
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("::new", function() {

    it("should create new Game instance", function() {
      expect(game instanceof Game).toBe(true);
    });

  });

  describe("playing in turn", function() {

    it("should return X", function() {
      expect(game.addCross()).toEqual("X");
    });

    it("should return O", function() {
      expect(game.addNought()).toEqual("O");
    });

    it("adds X when game starts the play", function() {
      expect(game.play()).toEqual("X");
    });

    it("adds O after X was played", function() {
      game.play();
      expect(game.play()).toEqual("O");
    });

    it("adds X after O was played", function() {
      game.play();
      game.play();
      expect(game.play()).toEqual("X");
    });
  });

  describe("adds ID to the relevant cross or noughts array", function() {

    it("should add ID to Crosses array", function() {
      expect(game.addCross()).toEqual("X");
    });


  });

  describe("determining the winner", function() {


    it("returns true when X wins ", function() {

      game._gameScoreX.push("#1");
      game._gameScoreX.push("#2");
      game._gameScoreX.push("#3");

      expect(game.checkWinX()).toBe(true);

    });

    it("returns false when O is not winning ", function() {

      game._gameScoreO.push("#1");
      game._gameScoreO.push("#2");
      game._gameScoreO.push("#4");

      expect(game.checkWinO()).toBe(false);

    });

    it("returns true when O wins ", function() {

      game._gameScoreO.push("#1");
      game._gameScoreO.push("#2");
      game._gameScoreO.push("#3");

      expect(game.checkWinO()).toBe(true);

    });

    it("returns false when X is not winning ", function() {

      game._gameScoreX.push(1);
      game._gameScoreX.push(2);
      game._gameScoreX.push(4);

      expect(game.checkWinX()).toBe(false);

    });

  });

});
