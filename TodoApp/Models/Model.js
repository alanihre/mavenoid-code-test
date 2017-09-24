export default class Model {
    constructor() {
        this._id = null;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    //List views uses the key property as identifiers for items
    get key() {
        return this._id;
    }

    fromArray(array) {
        if ("_id" in array) {
            this.id = array._id;
        }
    }
}
