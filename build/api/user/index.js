"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.ctrl"));

var router = _express["default"].Router();

router.route('/register').get(_user["default"].register);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map