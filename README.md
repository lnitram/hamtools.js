# hamtools.js

Nothing useful so far...


Usage:
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8"> 
    <script src="hamtools.min.js"></script>
  </head>
  <body>
    <script>
      console.log("Wavelength for 145 MHz = " + Hamtools.f2l(145) + " m");
      console.log("Freqzency for 2 m      = " + Hamtools.l2f(2) + " MHz");

      console.log("Locator for E 009.7° N 53.5° = " + Hamtools.pos2loc(9.7,53.58,1));
      console.log("Locator for E 009.7° N 53.5° = " + Hamtools.pos2loc(9.7,53.58,2));
      console.log("Locator for E 009.7° N 53.5° = " + Hamtools.pos2loc(9.7,53.58,3));

      var pos = Hamtools.loc2pos("JO43UN");
      console.log("Position for locator JO43UN: " + pos.center.lon + " " + pos.center.lat);
      console.log("Bounding box for locator JO43UN: west:" + pos.west + " north:" + pos.north + " east:" + pos.east + " south:" + pos.south);
    </script>
    see js-console for output
  </body>
</html>
```
Output will be like this:
```
Wavelength for 145 MHz = 2.067534193103448 m
Frequency for 2m = 149.896229 MHz
Locator for E 009.7° N 53.5° = JO
Locator for E 009.7° N 53.5° = JO43
Locator for E 009.7° N 53.5° = JO43UN
Position for locator JO43UN: 9.70833 53.5625
Bounding box for locator JO43UN: west:9.66667 north:53.58333 east:9.75 south:53.54167
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



