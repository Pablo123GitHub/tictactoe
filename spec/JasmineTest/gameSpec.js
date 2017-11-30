describe("Player", function() {

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

  describe("determining the winner", function() {


    it("returns false when we check the score for crosses score before the game ", function() {

      expect(game.checkWinX()).toBe(false);

    });
  });

});
