"use strict";
function min(..._inputs) {
    let min = Infinity;
    for (let i = 0; i < _inputs.length; i++) {
        if (min > _inputs[i]) {
            min = _inputs[i];
        }
    }
    return min;
}
function isEven(_input) {
    if (_input == 0)
        return true;
    if (_input == 1)
        return false;
    let result = isEven(_input - 2);
    return result;
}
console.log(isEven(50));
console.log(isEven(75));
//# sourceMappingURL=script.js.map