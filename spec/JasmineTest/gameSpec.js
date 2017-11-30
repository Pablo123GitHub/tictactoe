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

  it("should draw a pipe ", function() {
    expect(game.drawLine()).toBe("|");
  });

});
