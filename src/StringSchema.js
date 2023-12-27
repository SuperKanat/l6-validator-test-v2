export default class StringSchema {
    constructor(vals = [(item) => typeof item === 'string']) {
        this.valid = [...vals];
    }

    isValid(item) {
        return this.valid.every((val) => val(item) === true);
    }

    hasSpaces() {
        return new StringSchema([...this.valid, (item) => item.includes(' ')])
    }
}