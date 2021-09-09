"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  db: 'mongodb://localhost:27017/dawam?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
  apiPort: process.env.PORT || 4000
};
exports.config = config;
//# sourceMappingURL=config.js.map