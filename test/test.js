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

    it("Test uripui", function() {
      d = Hamtools.uripui({u:12, i:2});
      assert.equal(d.r, 6);
      assert.equal(d.p, 24);
      d = Hamtools.uripui({u:12, r:6});
      assert.equal(d.i, 2);
      assert.equal(d.p, 24);
      d = Hamtools.uripui({u:12, p:24});
      assert.equal(d.i, 2);
      assert.equal(d.r, 6);
      d = Hamtools.uripui({i:2, r:6});
      assert.equal(d.i, 2);
      assert.equal(d.r, 6);
      d = Hamtools.uripui({i:2, p:24});
      assert.equal(d.i, 2);
      assert.equal(d.p, 24);
      d = Hamtools.uripui({r:6, p:24});
      assert.equal(d.u, 12);
      assert.equal(d.i, 2);
    });

    it("Test distance", function(){
      var d = Hamtools.distance(40.714268,-74.005974,53.553406,9.992196);
      assert.ok(Math.abs(6129.6094 - d) < 0.0001);
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
      res = Hamtools.pos2loc(12.694165,50.806689,3);
      assert.equal(res,"JO60IT");
    });
  });
});
