"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

// import { auth } from './Util';
var _default = function _default(app) {
  app.use((0, _cors["default"])());
  app.use(_express["default"].urlencoded());
  app.use(_express["default"].json()); // app.use(auth)
};

exports["default"] = _default;
//# sourceMappingURL=express.js.map