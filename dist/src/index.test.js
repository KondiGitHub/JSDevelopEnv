'use strict';

var _chai = require('chai');

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Index Test", function () {

  it("Test should pass", function () {
    (0, _chai.expect)(true).to.equal(true);
  });
}); /**
     * Created by haich on 5/6/2018.
     */


describe("Testing index.html", function () {
  it("Test index.html", function (done) {

    var index = _fs2.default.readFileSync('./src/index.html', "utf-8");
    _jsdom2.default.env(index, function (err, window) {

      var h1 = window.document.getElementsByTagName('h1')[0];
      (0, _chai.expect)(h1.innerHTML).to.equal("Hello World CHARY!!!");
      done();
      window.close();
    });
  });
});
//# sourceMappingURL=index.test.js.map