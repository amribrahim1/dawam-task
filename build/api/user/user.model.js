"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _crypto = _interopRequireDefault(require("crypto"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var UserSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  firstName: {
    type: String,
    "default": null
  },
  lastName: {
    type: String,
    "default": null
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  phone: {
    type: String
  },
  token: {
    type: String,
    "default": null
  },
  active: {
    "default": true,
    type: Boolean
  },
  salt: String
}, {
  timestamps: true
});

UserSchema.methods.generateAuthToken = function () {
  var token = _jsonwebtoken["default"].sign({
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    type: "user"
  }, "AmrEraky");

  this.token === token;
  return token;
}; // Method to set salt and hash the password for a user 


UserSchema.methods.setPassword = function () {
  // Creating a unique salt for a particular user 
  this.salt = _crypto["default"].randomBytes(16).toString('hex'); // Hashing user's salt and password with 1000 iterations, 

  this.password = _crypto["default"].pbkdf2Sync(this.password, this.salt, 1000, 64, "sha512").toString("hex");
}; // Method to check the entered password is correct or not 


UserSchema.methods.validPassword = function (password) {
  var hash = _crypto["default"].pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");

  return this.password === hash;
};

var _default = _mongoose["default"].model('users', UserSchema);

exports["default"] = _default;
//# sourceMappingURL=user.model.js.map