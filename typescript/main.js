"use strict";
exports.__esModule = true;
var LikeComponent_1 = require("./LikeComponent");
var component = new LikeComponent_1["default"]();
component.onClick(); // 1
component.onClick(); // 2
component.active = true;
component.onClick(); // 1
component.active = false;
component.onClick(); // 2
console.log(component.likesCount);
