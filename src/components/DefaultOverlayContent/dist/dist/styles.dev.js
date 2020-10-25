"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

exports.__esModule = true;
exports.Buttons = exports.Heading = exports.Container = void 0;

var styled_components_1 = require("styled-components");

exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.Heading = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.Buttons = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3;