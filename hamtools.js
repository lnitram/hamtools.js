function Hamtools() {
  var c = 299792458; // m/s
  this.hello = function() {
    return "Hello world!";
  }

  this.f2l = function (frequency) {
     return c/(frequency*1000000);
  }


};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.Hamtools = Hamtools;
}


