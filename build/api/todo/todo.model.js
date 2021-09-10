"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var TodoSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: [true, 'Todo name is required!']
  },
  user: {
    "default": null,
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    "default": null,
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model('Todo', TodoSchema);

exports["default"] = _default;
//# sourceMappingURL=todo.model.js.map