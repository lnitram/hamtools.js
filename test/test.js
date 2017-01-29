var assert = require('assert');

var tools = require("../hamtools.js");
var Hamtools = tools.Hamtools;

describe('hamtools', function() {
  describe('Frequency tests',  function() {
    it("Test f to wavelength", function() {
      assert.ok(Math.abs(2.06753 - Hamtools.f2l(145))<0.00001);
    });

    it("Test wavelength to f", function() {
      assert.ok(Math.abs(149.89623 - Hamtools.l2f(2))<0.00001);
    });
  });

  describe('Locator tests', function() {
    it("Test locator", function() {
      var res = Hamtools.loc2pos("JO43UN");
      assert.ok(Math.abs(res.north - 53.58333) < 0.00001);
      assert.ok(Math.abs(res.south - 53.54167) < 0.00001);
      assert.ok(Math.abs(res.west  -  9.66667) < 0.00001);
      assert.ok(Math.abs(res.east  -  9.75   ) < 0.00001);
      assert.ok(Math.abs(res.center.lon - 9.70833) < 0.00001);
      assert.ok(Math.abs(res.center.lat - 53.5625) < 0.00001);
    });

    it("Test lonlat to locator", function(){
      var res = Hamtools.pos2loc(9.70833,53.5625,3);
      assert.equal(res,"JO43UN");
    });
  });
});
