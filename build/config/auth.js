"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUser = authUser;
exports.authAdmin = authAdmin;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var jwt = require('jsonwebtoken'); // Check if user authorizated


function authUser(_x, _x2, _x3) {
  return _authUser.apply(this, arguments);
} // Check if admin authorizated


function _authUser() {
  _authUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerHeader, bearer, bearerToken, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bearerHeader = req.headers['authorization'];

            if (!bearerHeader) {
              _context.next = 17;
              break;
            }

            bearer = bearerHeader.split(' ');
            bearerToken = bearer[1];
            _context.next = 7;
            return jwt.verify(bearerToken, 'AmrEraky');

          case 7:
            user = _context.sent;

            if (!user.type) {
              _context.next = 13;
              break;
            }

            req.userId = user.id;
            next();
            _context.next = 15;
            break;

          case 13:
            res.status(401).send({
              ok: false,
              error: 'Not authorized to access this resource'
            });
            return _context.abrupt("return");

          case 15:
            _context.next = 19;
            break;

          case 17:
            res.status(401).send({
              ok: false,
              error: 'Not authorized to access this resource'
            });
            return _context.abrupt("return");

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            res.status(401).send({
              ok: false,
              error: _context.t0
            });
            return _context.abrupt("return");

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));
  return _authUser.apply(this, arguments);
}

function authAdmin(_x4, _x5, _x6) {
  return _authAdmin.apply(this, arguments);
}

function _authAdmin() {
  _authAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var bearerHeader, bearer, bearerToken, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            bearerHeader = req.headers['authorization'];

            if (!bearerHeader) {
              _context2.next = 23;
              break;
            }

            bearer = bearerHeader.split(' ');
            bearerToken = bearer[1];
            _context2.next = 7;
            return jwt.verify(bearerToken, 'AmrEraky');

          case 7:
            user = _context2.sent;

            if (!user.type) {
              _context2.next = 19;
              break;
            }

            if (!(user.type === 'admin')) {
              _context2.next = 15;
              break;
            }

            req.userId = user.id;
            req.userType = 'admin';
            next();
            _context2.next = 17;
            break;

          case 15:
            res.status(401).send({
              ok: false,
              error: 'Not authorized to access this resource'
            });
            return _context2.abrupt("return");

          case 17:
            _context2.next = 21;
            break;

          case 19:
            res.status(401).send({
              ok: false,
              error: 'Not authorized to access this resource'
            });
            return _context2.abrupt("return");

          case 21:
            _context2.next = 25;
            break;

          case 23:
            res.status(401).send({
              ok: false,
              error: 'Not authorized to access this resource'
            });
            return _context2.abrupt("return");

          case 25:
            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](0);
            res.status(401).send({
              ok: false,
              error: _context2.t0
            });
            return _context2.abrupt("return");

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 27]]);
  }));
  return _authAdmin.apply(this, arguments);
}
//# sourceMappingURL=auth.js.map