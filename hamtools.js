var Hamtools = (function(){
  var c = 299792458; // m/s

  var f2l = function (frequency) {
     return c/(frequency*1000000.);
  };

  var l2f = function(wavelength) {
     return (c/wavelength)/1000000.;
  };

  var uripui = function(d) {
     if (d.u != null && d.r != null) {
       d.i = d.u/d.r;
       d.p = d.u * d.i;
     } else if (d.u != null && d.i != null) {
       d.r = d.u/d.i;
       d.p = d.u * d.i;
     } else if (d.u != null && d.p != null) {
       d.i = d.p/d.u;
       d.r = d.u/d.i;
     } else if (d.r != null && d.i != null) {
       d.u = d.r * d.i;
       d.p = d.u * d.i;
     } else if (d.r != null && d.p != null) {
       d.i = Math.sqrt(d.p/d.r);
       d.u = d.r * d.i;
     } else if (d.i != null && d.p != null) {
       d.u = d.p/d.i;
       d.r = d.u/d.i;
     }
     return d;
  };

  var distance = function (lat1,lon1,lat2,lon2) {
    var R = 6371.000785;
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }

  function deg2rad(deg) { return deg * (Math.PI/180);}

  var loc2pos = function(locator) {
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

  var pos2loc = function(lon,lat,precision) {
    var d1 = "ABCDEFGHIJKLMNOPQR";
    var d2 = "ABCDEFGHIJKLMNOPQRSTUVWX";
    var locator = "";
    var x = lon;
    var y = lat;

    while (x < -180) {x += 360;}
    while (x > 180) {x -=360;}

    x = x + 180;
    y = y + 90;

    locator = locator + d1[Math.floor(x/20)] + d1[Math.floor(y/10)];

    if (precision > 1) {
      rlon = x%20;
      rlat = y%10;
      locator += Math.floor(rlon/2) +""+ Math.floor(rlat/1);
    }

    if (precision > 2) {
      rlon = rlon%2;
      rlat = rlat%1;
      locator += d2[Math.floor(rlon/(2/24))] + "" + d2[Math.floor(rlat/(1/24))];
    }

    return locator;
  };


  return {
    f2l:f2l,
    l2f:l2f,
    loc2pos:loc2pos,
    pos2loc:pos2loc,
    uripui:uripui,
    distance:distance
  };

})();


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.Hamtools = Hamtools;
}


