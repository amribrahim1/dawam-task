"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = _interopRequireDefault(require("./category.ctrl"));

var _auth = require("../../config/auth");

var router = _express["default"].Router();

router.route('/category') // get all categories
.get(_auth.authUser, _category["default"].getAll) // Create a new category
.post(_auth.authUser, _category["default"].create); // Delete a category

router.route('/category/:id')["delete"](_auth.authUser, _category["default"].deleteById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map