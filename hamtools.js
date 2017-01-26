function Hamtools() {
  this.hello = function() {
    return "Hello world!";
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.Hamtools = Hamtools;
}


