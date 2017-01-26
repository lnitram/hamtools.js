function Hamtools() {
  var c = 299792458; // m/s

  this.f2l = function (frequency) {
     return c/(frequency*1000000);
  };

  this.locator2pos = function(locator) {
    var d1 = "ABCDEFGHIJKLMNOPQR".split("");
    var d2 = "ABCDEFGHIJKLMNOPQRSTUVWX".split("");
    var len = locator.length;

    if((len % 2 != 0) || (len > 6)) {
      throw ("Invalid locator string");
    }

    var x1 = (locator.toUpperCase().charCodeAt(0)-65)*20 - 180;
    var x2 = x1 + 20;
    var y1 = (locator.toUpperCase().charCodeAt(1)-65)*10 - 90;
    var y2 = y1 + 10;

    if(len>= 4) {
      x1 = x1 + (locator.charCodeAt(2)-48)*2;
      x2 = x1 + 2;
      y1 = y1 + locator.charCodeAt(3)-48;
      y2 = y1 + 1;
    }

    if(len == 6) {		
      x1 = x1 + (locator.toUpperCase().charCodeAt(4)-65)*2/24;
      x2 = x1 + 2/24;
      y1 = y1 + (locator.toUpperCase().charCodeAt(5)-65)*1/24;
      y2 = y1 + 1/24;
    }

    return {north:y2, south:y1, west:x1, east:x2, center:{lon: x1 + (x2-x1)/2., lat: y1 + (y2-y1)/2.}}
   


  };


};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.Hamtools = Hamtools;
}


