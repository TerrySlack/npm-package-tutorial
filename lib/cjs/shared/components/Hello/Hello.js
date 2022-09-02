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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("../Button");
var Hello = function (_a) {
    var name = _a.name;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", __assign({ className: "white" }, { children: ["Hey ", name, ", Yeee Hawwww."] })), (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({ className: "" }, { children: "Click Me" })), (0, jsx_runtime_1.jsxs)("p", { children: ["className=\"white\"Button is", typeof Button_1.Button] }), (0, jsx_runtime_1.jsx)("p", __assign({ className: "white" }, { children: "it worked" }))] }));
};
exports.Hello = Hello;
