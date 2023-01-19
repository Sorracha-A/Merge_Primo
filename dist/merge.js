"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            result.push(collection1[i]);
            i++;
        }
        else {
            result.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }
    return result;
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map