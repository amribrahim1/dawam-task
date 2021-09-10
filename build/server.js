"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express2 = _interopRequireDefault(require("./config/express"));

var _config = require("./config/config");

var _routes = _interopRequireDefault(require("./config/routes"));

var Server = /*#__PURE__*/function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);
    this.app = (0, _express["default"])();
    this.config = _config.config;
    this.init();
  }

  (0, _createClass2["default"])(Server, [{
    key: "init",
    value: function init() {
      var _this = this;

      (0, _express2["default"])(this.app);
      this.app.options("/*", function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send(200);
      });

      _mongoose["default"].connect(this.config.db, function (err) {
        if (err) {
          console.log("[MongoDB] Failed to connect. ".concat(err));
        } else {
          console.log("[MongoDB] connected: ".concat(_this.config.db)); // initialize api

          (0, _routes["default"])(_this.app); // start server

          _this.app.listen(_this.config.apiPort, function () {
            console.log("[Server] listening on port ".concat(_this.config.apiPort));
          });
        }
      });

      ;
    }
  }]);
  return Server;
}();

var server = new Server().app;
module.exports = server;
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=server.js.map