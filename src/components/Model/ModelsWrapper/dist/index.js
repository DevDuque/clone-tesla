"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var ModelsContext_1 = require("../ModelsContext");
var ModelOverlay_1 = require("../ModelOverlay");
var styles_1 = require("./styles");
var ModelsWrapper = function (_a) {
    var children = _a.children;
    var wrapperRef = react_1.useRef(null);
    var _b = react_1.useState([]), registeredModels = _b[0], setRegisteredModels = _b[1];
    var registerModel = react_1.useCallback(function (model) {
        setRegisteredModels(function (state) { return __spreadArrays(state, [__assign({}, model)]); });
    }, []);
    var unregisterModel = react_1.useCallback(function (modelName) {
        setRegisteredModels(function (state) {
            return state.filter(function (model) { return model.modelName !== modelName; });
        });
    }, []);
    var getModelByName = react_1.useCallback(function (modelName) {
        return registeredModels.find(function (item) { return item.modelName === modelName; }) || null;
    }, [registeredModels]);
    return (react_1["default"].createElement(ModelsContext_1["default"].Provider, { value: {
            wrapperRef: wrapperRef,
            registeredModels: registeredModels,
            registerModel: registerModel,
            unregisterModel: unregisterModel,
            getModelByName: getModelByName
        } },
        react_1["default"].createElement(styles_1.Container, { ref: wrapperRef },
            react_1["default"].createElement(styles_1.OverlaysRoot, null, registeredModels.map(function (item) { return (react_1["default"].createElement(ModelOverlay_1["default"], { key: item.modelName, model: item }, item.overlayNode)); })),
            children)));
};
exports["default"] = ModelsWrapper;
