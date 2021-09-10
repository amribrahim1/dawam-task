"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = _interopRequireDefault(require("lodash"));

var _category = _interopRequireDefault(require("./category.model"));

function create(_x, _x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var name, category, newCategory;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            name = req.body.name;
            _context.next = 4;
            return _category["default"].findOne({
              name: name
            });

          case 4:
            category = _context.sent;

            if (_lodash["default"].isEmpty(category)) {
              _context.next = 8;
              break;
            }

            res.status(400).send({
              ok: false,
              message: "A category with this name is exists."
            });
            return _context.abrupt("return");

          case 8:
            newCategory = new _category["default"]();
            newCategory.name = name;
            _context.next = 12;
            return newCategory.save(function (err, category) {
              if (err) {
                return res.status(400).send({
                  ok: false,
                  error: err.message
                });
              } else {
                return res.status(200).send({
                  ok: true,
                  category: {
                    name: category.name,
                    id: category._id
                  }
                });
              }
            });

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _create.apply(this, arguments);
}

function getAll(req, res) {
  _category["default"].find({}, function (err, categories) {
    if (err) {
      res.status(400).send({
        ok: false,
        error: err.message
      });
      return;
    }

    res.status(200).send({
      ok: true,
      categories: categories
    });
  });
}

function deleteById(req, res) {
  var id = req.params.id;

  _category["default"].findByIdAndRemove(id, function (err, result) {
    if (err) {
      res.status(400).send({
        ok: false,
        error: err.message
      });
      return;
    }

    res.status(200).send({
      ok: true,
      message: "The '".concat(result.name, "' category has been deleted.")
    });
  });
}

var _default = {
  create: create,
  getAll: getAll,
  deleteById: deleteById
};
exports["default"] = _default;
//# sourceMappingURL=category.ctrl.js.map