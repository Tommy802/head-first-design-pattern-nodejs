class ArrayList {
    constructor() {
        this.arrayList = [];
    }

    add(obj) {
        return this.arrayList.push(obj);
    }

    size() {
        return this.arrayList.length;
    }

    get(index) {
        if (index > -1 && index < this.arrayList.length) {
            return this.arrayList[index];
        }
    }

    indexOf(obj, startIndex) {
        var i = startIndex;
        while (i < this.arrayList.length) {
            if (this.arrayList[i] === obj) {
                return i;
            }
            i++;
        }

        return -1;
    }

    remove(index) {
        this.arrayList.splice(index, 1);
    }

}

module.exports = ArrayList;