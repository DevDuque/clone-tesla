"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Model_1 = require("../Model");
var styles_1 = require("./styles");
var UniqueOverlay = function () {
    var scrollYProgress = Model_1.useWrapperScroll().scrollYProgress;
    var opacity = framer_motion_1.useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Header, null,
            react_1["default"].createElement(styles_1.Logo, null),
            react_1["default"].createElement(styles_1.Burger, null)),
        react_1["default"].createElement(styles_1.Footer, { style: { opacity: opacity } },
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Tesla Clone")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Made with Heart")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "by Duque"))))));
};
exports["default"] = UniqueOverlay;
