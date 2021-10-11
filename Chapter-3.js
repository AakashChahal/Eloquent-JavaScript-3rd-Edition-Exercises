// Exercise-1 (Minimum)
const min = function (arg1, arg2) {
    if (arg1 > arg2) return arg2;
    return arg1;
};
console.log(min(24, 13));
// output -> 13

// Exercise-2 (Recusrion)
const isEven = function (num) {
    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(-num);
    // -(-1) => 1
    else return isEven(num - 2);
};

console.log(isEven(-1));
// output -> false

// Exercise-3 (Bean Counting)
const countBs = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") count++;
    }
    return count;
};

const countChar = function (str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
};

console.log(countBs("BasketBall and Football are not same"));
// output -> 2
console.log(countChar("Count total number of t in this string", "t"));
// output -> 6
