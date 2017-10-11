export default class LikeComponent {
    private _likesCount: number;
    private _active: boolean;

    constructor() {
        this._likesCount = 0;
        this._active = false;
    }

    get likesCount() : number {
        return this._likesCount;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    onClick() {
        if (! this.active) {
            this._likesCount++;
        } else {
            if (this.likesCount > 0) {
                this._likesCount--;
            }
        }
    }
}