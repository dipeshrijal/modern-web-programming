"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this._likesCount = 0;
        this._active = false;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        if (!this.active) {
            this._likesCount++;
        }
        else {
            if (this.likesCount > 0) {
                this._likesCount--;
            }
        }
    };
    return LikeComponent;
}());
exports["default"] = LikeComponent;
