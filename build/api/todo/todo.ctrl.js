"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _todo = _interopRequireDefault(require("./todo.model"));

function create(_x, _x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, category, userId, newTodo;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, category = _req$body.category;
            userId = req.userId;
            newTodo = new _todo["default"]();
            newTodo.name = name;
            newTodo.user = userId;
            newTodo.category = category;
            _context.next = 9;
            return newTodo.save(function (err, todo) {
              if (err) {
                return res.status(400).send({
                  ok: false,
                  error: err.message
                });
              } else {
                return res.status(200).send({
                  ok: true,
                  todo: todo
                });
              }
            });

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _create.apply(this, arguments);
}

function getAll(_x3, _x4) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var todos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _todo["default"].find({}).sort({
              createdAt: -1
            });

          case 3:
            todos = _context2.sent;
            res.status(200).send({
              ok: true,
              todos: todos
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).send({
              ok: false,
              error: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getAll.apply(this, arguments);
}

function getMyTodos(_x5, _x6) {
  return _getMyTodos.apply(this, arguments);
}

function _getMyTodos() {
  _getMyTodos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, todos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userId = req.userId;
            _context3.next = 4;
            return _todo["default"].find({
              user: userId
            }).sort({
              createdAt: -1
            });

          case 4:
            todos = _context3.sent;
            res.status(200).send({
              ok: true,
              todos: todos
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).send({
              ok: false,
              error: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getMyTodos.apply(this, arguments);
}

function deleteById(_x7, _x8) {
  return _deleteById.apply(this, arguments);
}

function _deleteById() {
  _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var todoId, userId, todo;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            todoId = req.params.todoId;
            userId = req.userId;
            _context4.next = 4;
            return _todo["default"].findById({
              _id: todoId
            });

          case 4:
            todo = _context4.sent;

            if (!(todo === null)) {
              _context4.next = 8;
              break;
            }

            res.status(404).send({
              ok: false,
              error: "There is no todo with id '".concat(todoId, "'!")
            });
            return _context4.abrupt("return");

          case 8:
            if (!((!req.userType || req.userType !== 'admin') && String(_mongoose["default"].Types.ObjectId(userId)) !== String(todo.user))) {
              _context4.next = 11;
              break;
            }

            res.status(400).send({
              ok: false,
              error: "You are not allowed to delete this todo!"
            });
            return _context4.abrupt("return");

          case 11:
            _todo["default"].findByIdAndRemove({
              _id: todoId
            }, function (err, result) {
              if (err) {
                res.status(400).send({
                  ok: false,
                  error: err.message
                });
                return;
              }

              res.status(200).send({
                ok: true,
                message: "The '".concat(result.name, "' todo has been deleted.")
              });
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteById.apply(this, arguments);
}

function getMyTodosByCategory(_x9, _x10) {
  return _getMyTodosByCategory.apply(this, arguments);
}

function _getMyTodosByCategory() {
  _getMyTodosByCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var userId, catId, todos;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            userId = req.userId;
            catId = req.params.catId;
            _context5.next = 5;
            return _todo["default"].find({
              user: userId,
              category: catId
            }).sort({
              createdAt: -1
            });

          case 5:
            todos = _context5.sent;
            res.status(200).send({
              ok: true,
              todos: todos
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            res.status(400).send({
              ok: false,
              error: _context5.t0.message
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return _getMyTodosByCategory.apply(this, arguments);
}

function getAllByCategory(_x11, _x12) {
  return _getAllByCategory.apply(this, arguments);
}

function _getAllByCategory() {
  _getAllByCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var catId, todos;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            catId = req.params.catId;
            _context6.next = 4;
            return _todo["default"].find({
              category: catId
            }).sort({
              createdAt: -1
            });

          case 4:
            todos = _context6.sent;
            res.status(200).send({
              ok: true,
              todos: todos
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(400).send({
              ok: false,
              error: _context6.t0.message
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getAllByCategory.apply(this, arguments);
}

function getById(_x13, _x14) {
  return _getById.apply(this, arguments);
}

function _getById() {
  _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var todoId, userId, todo;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            todoId = req.params.todoId;
            userId = req.userId;
            _context7.next = 4;
            return _todo["default"].findById({
              _id: todoId
            });

          case 4:
            todo = _context7.sent;

            if (!(todo === null)) {
              _context7.next = 8;
              break;
            }

            res.status(404).send({
              ok: false,
              error: "There is no todo with id '".concat(todoId, "'!")
            });
            return _context7.abrupt("return");

          case 8:
            if (!((!req.userType || req.userType !== 'admin') && String(_mongoose["default"].Types.ObjectId(userId)) !== String(todo.user))) {
              _context7.next = 11;
              break;
            }

            res.status(400).send({
              ok: false,
              error: "You are not allowed to delete this todo!"
            });
            return _context7.abrupt("return");

          case 11:
            res.status(200).send({
              ok: true,
              todo: todo
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getById.apply(this, arguments);
}

var _default = {
  create: create,
  getMyTodos: getMyTodos,
  getAll: getAll,
  deleteById: deleteById,
  getMyTodosByCategory: getMyTodosByCategory,
  getAllByCategory: getAllByCategory,
  getById: getById
};
exports["default"] = _default;
//# sourceMappingURL=todo.ctrl.js.map