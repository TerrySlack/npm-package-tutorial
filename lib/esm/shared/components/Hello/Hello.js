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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../Button";
export var Hello = function (_a) {
    var name = _a.name;
    return (_jsxs("div", { children: [_jsxs("p", __assign({ className: "white" }, { children: ["Hey ", name, ", Yeee Hawwww."] })), _jsx(Button, __assign({ className: "" }, { children: "Click Me" })), _jsxs("p", { children: ["className=\"white\"Button is", typeof Button] }), _jsx("p", __assign({ className: "white" }, { children: "it worked" }))] }));
};
