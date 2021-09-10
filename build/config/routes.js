"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../api/user"));

var _category = _interopRequireDefault(require("../api/category"));

var _todo = _interopRequireDefault(require("../api/todo"));

var _default = function _default(app) {
  app.use('/api', _user["default"]);
  app.use('/api', _category["default"]);
  app.use('/api', _todo["default"]);
};

exports["default"] = _default;
//# sourceMappingURL=routes.js.map