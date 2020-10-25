"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var useWrapperScroll_1 = require("../useWrapperScroll");
var styles_1 = require("./styles");
var ModelOverlay = function (_a) {
    var model = _a.model, children = _a.children;
    var scrollY = useWrapperScroll_1["default"]().scrollY;
    var getSectionDimensions = react_1.useCallback(function () {
        var _a, _b, _c, _d;
        return {
            offsetTop: (_b = (_a = model.sectionRef.current) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0,
            offsetHeight: (_d = (_c = model.sectionRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) !== null && _d !== void 0 ? _d : 0
        };
    }, [model.sectionRef]);
    var _b = react_1.useState(getSectionDimensions()), dimensions = _b[0], setDimensions = _b[1];
    react_1.useLayoutEffect(function () {
        function onResize() {
            window.requestAnimationFrame(function () { return setDimensions(getSectionDimensions()); });
        }
        window.addEventListener('resize', onResize);
        return function () { return window.removeEventListener('resize', onResize); };
    }, [getSectionDimensions, model.sectionRef]);
    var sectionScrollProgress = framer_motion_1.useTransform(scrollY, function (y) { return (y - dimensions.offsetTop) / dimensions.offsetHeight; });
    var opacity = framer_motion_1.useTransform(sectionScrollProgress, [-0.42, -0.05, 0.05, 0.42], [0, 1, 1, 0]);
    var pointerEvents = framer_motion_1.useTransform(opacity, function (value) {
        return value > 0 ? 'auto' : 'none';
    });
    return react_1["default"].createElement(styles_1.Container, { style: { opacity: opacity, pointerEvents: pointerEvents } }, children);
};
exports["default"] = ModelOverlay;
