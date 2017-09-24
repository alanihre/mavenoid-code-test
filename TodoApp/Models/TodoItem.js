
import Model from "./Model";

export default class TodoItem extends Model {
    constructor() {
        super();
        this._title = null;
        this._done = false;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get done() {
        return this._done;
    }

    set done(value) {
        this._done = value;
    }

    fromArray(array) {
        super.fromArray(array);
        if ("_title" in array) {
            this._title = array._title;
        }

        if ("_done" in array) {
            this._done = array._done;
        }
    }
}
