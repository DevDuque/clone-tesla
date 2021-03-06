"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Buttons = exports.Heading = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n"])));
exports.Heading = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 16.5vh;\n  width: 100%;\n  text-align: center;\n  > h1 {\n    font-weight: 800;\n    font-size: 40px;\n    line-height: 48px;\n    color:#0a0a0a;\n  }\n  > h2 {\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 20px;\n    color:#ff3030;\n  }\n"], ["\n  margin-top: 16.5vh;\n  width: 100%;\n  text-align: center;\n  > h1 {\n    font-weight: 800;\n    font-size: 40px;\n    line-height: 48px;\n    color:#0a0a0a;\n  }\n  > h2 {\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 20px;\n    color:#ff3030;\n  }\n"])));
exports.Buttons = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 130px;\n  > button {\n    background: #1a1720;\n    color: #fff;\n    opacity: 0.8;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.4px;\n    text-transform: uppercase;\n    padding: 13px 40px;\n    border-radius: 20px;\n    border: none;\n    outline: 0;\n    cursor: pointer;\n    &.white {\n      background: #fff;\n      color: #1a1720;\n      opacity: 0.65;\n    }\n    & + button {\n      margin: 10px 0 0;\n    }\n  }\n  @media (min-width: 600px) {\n    flex-direction: row;\n    margin-bottom: 90px;\n    > button + button {\n      margin: 0 0 0 10px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 130px;\n  > button {\n    background: #1a1720;\n    color: #fff;\n    opacity: 0.8;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.4px;\n    text-transform: uppercase;\n    padding: 13px 40px;\n    border-radius: 20px;\n    border: none;\n    outline: 0;\n    cursor: pointer;\n    &.white {\n      background: #fff;\n      color: #1a1720;\n      opacity: 0.65;\n    }\n    & + button {\n      margin: 10px 0 0;\n    }\n  }\n  @media (min-width: 600px) {\n    flex-direction: row;\n    margin-bottom: 90px;\n    > button + button {\n      margin: 0 0 0 10px;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
