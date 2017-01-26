var assert = require('assert');
var hamtools = require("../hamtools.js");

describe('hamtools', function() {
  describe('Frequency tests',  function() {
    it("Test f to wavelength", function() {
      var tools = new hamtools.Hamtools();
      assert.ok(Math.abs(2.06753 - tools.f2l(145))<0.00001);
    });
  });

  describe('Locator tests', function() {

  });
});
