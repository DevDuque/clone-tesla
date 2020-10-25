"use strict";

exports.__esModule = true;

var react_1 = require("react");

var GlobalStyles_1 = require("./styles/GlobalStyles");

var index_1 = require("./components/Page/index");

function App() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(index_1["default"], null), react_1["default"].createElement(GlobalStyles_1.GlobalStyles, null));
}

exports["default"] = App;