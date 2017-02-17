# hamtools.js

Some functions I need from time to time, put together in a toolbox / library. Maybe it's useful for somebody else. No license decision yet, just ask if you want to use it.

Import js lib to your html:

```
<script src="hamtools.min.js"></script>
```

Now use it:

```
// Calculate wavelength in meter for frequency in MHz
var wavelength = Hamtools.f2l(145); // => 2.06753

// Calculate frequency in MHz for wavelength in meters
var frequency = Hamtools.l2f(2); // => 149.8962

// Calculate maidenhead locator from lon and lat
var loc = Hamtools.pos2loc(9.7,53.58,1)); // => JO
var loc = Hamtools.pos2loc(9.7,53.58,2)); // => JO43
var loc = Hamtools.pos2loc(9.7,53.58,3)); // => JO43UN

// Calculate position and bounding box for locator
var pos      = Hamtools.loc2pos("JO43UN");
var lon      = pos.center.lon; // => 9.70833
var lat      = pos.center.lat; // => 53.5625
var bb_west  = pos.west;       // => 9.66667
var bb_north = pos.north;      // => 53.58333
var bb_east  = pos.east;       // => 9.75
var bb_south = pos.south;      // => south:53.54167

// Parse position with degrees and minutes to decimal degrees
var s = "54°30.0' S 9°30.0' E";
var pos = Hamtools.parsePosition(s);
var lon = pos["lon"] // =>   9.5
var lat = pos["lat"] // => -54.5

// Calculate distance between 2 lon / lat
// New York
var lon1 = -74.005974;
var lat1 = 40.714268;

// Hamburg
var lon2 = 9.992196;
var lat2 = 53.553406;

var distance = Hamtools.distance(lat1,lon1,lat2,lon2); // => 6129.61 km
var bearing  = Hamtools.bearing(lat1,lon1,lat2,lon2) ; // => 46.06742°

// Calculate resistance and demand from U=12V and I=2A
var res = Hamtools.uripui({u:12, i:2});
var   r = res.r; //  6 Ohm
var   p = res.p; // 24 Watts

// Calculate current and remand from U=12V and R=6 Ohm
var res = Hamtools.uripui({u:12, r:6});
var i = res.i; // 2 Ampere
var p = res.p; // 24 Watts

// Calculate current and restistance from U=12V and P=24W
var res=  Hamtools.uripui({u:12, p:24});
var i = res.i; // 2A
var r = res.r; // 6 Ohm

// Calculate voltage and demand from I=2A and R=6 Ohm
var res = Hamtools.uripui({i:2, r:6});
var u = res.u; // 12V
var p = res.p; // 24W

//Calculate voltage and resistance from I=2A and P=24W
var res = Hamtools.uripui({i:2, p:24});
var u = res.u; // 12V
var r = res.r; // 6 Ohm

// Calculate voltage and current from R=6 Ohm and P=24W
var res = Hamtools.uripui({r:6, p:24});
var u = res.u; // 12V
var i = res.i; // 2A
```


Install:
```
npm install
```

Run the tests:
```
npm test
```

Build release:
```
grunt
```



