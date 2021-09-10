"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var CategorySchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: [true, 'Category name is required!']
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model('Category', CategorySchema);

exports["default"] = _default;
//# sourceMappingURL=category.model.js.map