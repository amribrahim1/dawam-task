"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = _interopRequireDefault(require("lodash"));

var _user = _interopRequireDefault(require("./user.model"));

function register(_x, _x2) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, firstName, lastName, password, phone, user, newUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, password = _req$body.password, phone = _req$body.phone;
            _context.next = 4;
            return _user["default"].findOne({
              email: email
            });

          case 4:
            user = _context.sent;

            if (_lodash["default"].isEmpty(user)) {
              _context.next = 8;
              break;
            }

            res.status(400).send("A user with this Email is exists");
            return _context.abrupt("return");

          case 8:
            newUser = new _user["default"]();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.email = email;
            newUser.phone = phone;
            newUser.password = password;
            newUser.setPassword(req.body.password);
            _context.next = 17;
            return newUser.generateAuthToken();

          case 17:
            token = _context.sent;
            newUser.token = token;
            _context.next = 21;
            return newUser.save(function (err, user) {
              if (err) {
                return res.status(400).send({
                  ok: false,
                  message: "Failed to add user.",
                  status_code: 200
                });
              } else {
                return res.status(200).send({
                  ok: true,
                  user: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    token: user.token,
                    active: user.active
                  }
                });
              }
            });

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0.message);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));
  return _register.apply(this, arguments);
}

function login(_x3, _x4) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Find user with requested email 

            _user["default"].findOne({
              email: email
            }, function (err, user) {
              if (err) {
                res.status(400).send({
                  ok: false,
                  err: err
                });
              }

              if (user === null) {
                return res.status(400).send({
                  ok: false,
                  message: "User not found."
                });
              } else {
                if (user.validPassword(password)) {
                  return res.status(200).send({
                    ok: true,
                    user: {
                      email: user.email,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      phone: user.phone,
                      token: user.generateAuthToken(),
                      active: user.active
                    }
                  });
                } else {
                  return res.status(400).send({
                    ok: false,
                    message: "Wrong Password"
                  });
                }
              }
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _login.apply(this, arguments);
}

var _default = {
  register: register,
  login: login
};
exports["default"] = _default;
//# sourceMappingURL=user.ctrl.js.map