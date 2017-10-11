'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var belontTo = function belontTo(data) {
  if (isNaN(data)) {
    return 'NaN';
  }
  var typeStr = Object.prototype.toString.call(data);
  return typeStr.replace(/\[object\s(.*)\]/g, '$1');
};
exports.default = belontTo;