"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OverlaysRoot = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n"], ["\n  height: 100vh;\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n"])));
exports.OverlaysRoot = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"], ["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
var templateObject_1, templateObject_2;
