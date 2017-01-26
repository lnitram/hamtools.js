var assert = require('assert');
var hamtools = require("../hamtools.js");

describe('hamtools', function() {
  describe('Locator tests', function() {
    it("Test hello world", function() {
      var tools =  new hamtools.Hamtools();
      assert.equal(tools.hello(),"Hello world!");
    });

  });
});
