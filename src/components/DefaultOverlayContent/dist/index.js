exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var DefaultOverlayContent = function (_a) {
    var label = _a.label, description = _a.description;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Heading, null,
            react_1["default"].createElement("h1", null,
                " ",
                label,
                " "),
            react_1["default"].createElement("h2", null,
                "  ",
                description,
                " ")),
        react_1["default"].createElement(styles_1.Buttons, null,
            react_1["default"].createElement("button", null, " Custom Order"),
            react_1["default"].createElement("button", { className: "white" }, " Exiting Inventory"))));
};
exports["default"] = DefaultOverlayContent;
