"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = (function () {
    function LikeComponent() {
        this.likesCount = 0;
        this._active = false;
    }
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
        if (this.active) {
            this.likesCount++;
        }
        else {
            if (this.likesCount > 0) {
                this.likesCount--;
            }
        }
    };
    return LikeComponent;
}());
exports.default = LikeComponent;
//# sourceMappingURL=LikeComponent.js.map