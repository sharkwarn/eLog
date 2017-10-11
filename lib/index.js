'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _belongto = require('./belongto');

var _belongto2 = _interopRequireDefault(_belongto);

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = belongToType = {
  'belontTo': _belongto2.default,
  'isArray': _isArray2.default
};