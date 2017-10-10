export default class LikeComponent {
    likesCount: number;
    private _active: boolean;

    constructor() {
        this.likesCount = 0;
        this._active = false;
    }

    get active() {
        return this._active;
    }

    set active (value : boolean) {
        this._active = value;
    }

    onClick() {
        if(this.active) {
            this.likesCount++;
        } else {
            if (this.likesCount > 0) {
                this.likesCount--;
            }
        }
    }
}