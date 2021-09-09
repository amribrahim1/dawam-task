"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  db: 'mongodb://127.0.0.1:27017/tracllo?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
  apiPort: process.env.PORT || 4000
};
exports.config = config;
//# sourceMappingURL=config.js.map