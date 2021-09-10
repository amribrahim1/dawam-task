"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _todo = _interopRequireDefault(require("./todo.ctrl"));

var _auth = require("../../config/auth");

var router = _express["default"].Router();

router.route('/todo') // get all todos of the user
.get(_auth.authUser, _todo["default"].getMyTodos) // Create a new todo
.post(_auth.authUser, _todo["default"].create);
router.route('/todo/category/:catId') // Get all todos sorted by category of the user
.get(_auth.authUser, _todo["default"].getMyTodosByCategory); // Get all todos

router.route('/todo/all').get(_auth.authAdmin, _todo["default"].getAll);
router.route('/todo/all/:catId') // Get all todos sorted by category
.get(_auth.authAdmin, _todo["default"].getAllByCategory);
router.route('/todo/:todoId') // Get one todo by id
.get(_auth.authUser, _todo["default"].getById) // Delete a todo
["delete"](_auth.authUser, _todo["default"].deleteById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map