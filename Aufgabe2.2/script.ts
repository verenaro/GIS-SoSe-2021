function min(..._inputs: number[]): number {
    let min: number = Infinity;
    for (let i: number = 0; i < _inputs.length; i++) {
        if (min > _inputs[i]) {
            min = _inputs[i];
        }
    }
    return min;
}
function isEven(_input: number): boolean {
    if (_input == 0) return true;
    if (_input == 1) return false;
    let result: boolean = isEven(_input - 2);
    return result;
}

console.log(isEven(50));
console.log(isEven(75));