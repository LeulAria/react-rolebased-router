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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var SubRoute_1 = __importDefault(require("./SubRoute"));
__exportStar(require("./types"), exports);
__exportStar(require("./SubRoute"), exports);
var Router = function (_a) {
    var routes = _a.routes, userAuthRoles = _a.userAuthRoles, loginRedirectPath = _a.loginRedirectPath, isUserAuthenticated = _a.isUserAuthenticated, blocked = _a.blocked, switchProps = __rest(_a, ["routes", "userAuthRoles", "loginRedirectPath", "isUserAuthenticated", "blocked"]);
    return (react_1.default.createElement(react_router_dom_1.Switch, __assign({}, switchProps), routes &&
        routes.map(function (route) { return (react_1.default.createElement(SubRoute_1.default, __assign({ key: route.path, userAuthRoles: userAuthRoles, loginRedirectPath: loginRedirectPath, isUserAuthenticated: isUserAuthenticated, blocked: blocked }, route))); })));
};
exports.default = Router;
//# sourceMappingURL=index.js.map