"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Model_1 = require("../Model");
var DefaultOverlayContent_1 = require("../DefaultOverlayContent");
var UniqueOverlay_1 = require("../UniqueOverlay");
var styles_1 = require("./styles");
var Page = function () {
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(Model_1.ModelsWrapper, null,
            react_1["default"].createElement("div", null, [
                'Model 3',
                'Model X',
                'Model Y',
                'Model S',
                'CyberTruck',
                'Solar and PowerWall'
            ].map(function (modelName) { return (react_1["default"].createElement(Model_1.ModelSection, { key: modelName, className: "colored", modelName: modelName, overlayNode: react_1["default"].createElement(DefaultOverlayContent_1["default"], { label: modelName, description: "Order Online for Touchless Delivery" }) })); })),
            react_1["default"].createElement(styles_1.Spacer, null),
            react_1["default"].createElement(UniqueOverlay_1["default"], null))));
};
exports["default"] = Page;
