'use strict';

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by haich on 5/6/2018.
 */
var courseValue = (0, _numeral2.default)(1000).format('$0,0.00');
console.log('I would pay ' + courseValue + ' for this awesome course!');
//# sourceMappingURL=index.js.map