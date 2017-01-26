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
      var tools = new Hamtools();
      console.log("Wavelength for 145 MHz = " + tools.f2l(145) + " m");

      console.log("Locator for E 009.7° N 53.5° = " + tools.pos2locator(9.7,53.58,1));
      console.log("Locator for E 009.7° N 53.5° = " + tools.pos2locator(9.7,53.58,2));
      console.log("Locator for E 009.7° N 53.5° = " + tools.pos2locator(9.7,53.58,3));

      var pos = tools.locator2pos("JO43UN");
      console.log("Position for locator JO43UN: " + pos.center.lon + " " + pos.center.lat);
      console.log("Bounding box for locator JO43UN: west:" + pos.west + " north:" + pos.north + " east:" + pos.east + " south:" + pos.south);
    </script>
    see js-console for output
  </body>
</html>
```
Output will be like this:
```
Wavelength for 145 MHz = 2.067534193103448 m  index.html:10:7
Locator for E 009.7° N 53.5° = JO  index.html:12:7
Locator for E 009.7° N 53.5° = JO43  index.html:13:7
Locator for E 009.7° N 53.5° = JO43UN  index.html:14:7
Position for locator JO43UN: 9.708333333333332 53.5625  index.html:17:7
Bounding box for locator JO43UN: west:9.666666666666666 north:53.58333333333333 east:9.75 south:53.541666666666664
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



