# hamtools.js

Some functions I need from time to time, put together in a toolbox / library. Maybe it's useful for somebody else. No license decision yet, just ask if you want to use it.

Import js lib to your html:

```
<script src="hamtools.min.js"></script>
```

Now use it:

```
// Calculate wavelength in meter for frequency in MHz
var wavelength = Hamtools.f2l(145); # => 2.06753

// Calculate frequency in MHz for wavelength in meters
var frequency = Hamtools.l2f(2); # => 149.8962

// Calculate maidenhead locator from lon and lat
var loc = Hamtools.pos2loc(9.7,53.58,1)); # => JO
var loc = Hamtools.pos2loc(9.7,53.58,2)); # => JO43
var loc = Hamtools.pos2loc(9.7,53.58,3)); # => JO43UN

// Calculate position and bounding box for locator
var pos      = Hamtools.loc2pos("JO43UN");
var lon      = pos.center.lon; # => 9.70833
var lat      = pos.center.lat; # => 53.5625
var bb_west  = pos.west;       # => 9.66667
var bb_north = pos.north;      # => 53.58333
var bb_east  = pos.east;       # => 9.75
var bb_south = pos.south;      # => south:53.54167
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



