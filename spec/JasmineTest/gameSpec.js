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

  it("adds O after X was played", function() {
    game.play();
    game.play();
    expect(game.play()).toEqual("X");
  });




});
