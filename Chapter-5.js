// Exercise-1 (Flattening)
const flatten = function (arr) {
    const flatArr = arr.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
    return flatArr;
};

console.log(flatten([[1, 2, 3], [4, 5], [6]]));

// Exercise-2 (Your Own Loop)
const loop = function (val, test, update, body) {
    while (test(val)) {
        body(val);
        val = update(val);
    }
};

loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log
);

// Exercise-3 (Everything)
const every = function (arr, test) {
    for (const el of arr) {
        if (!test(el)) return false;
    }
    return true;
};

const everyUsingSome = function (arr, test) {
    return !arr.some((el) => !test(el));
};

// Exercise-4 (Dominant Writing Direction)
const dominantDirection = function (text) {
    let counted = countBy(text, (char) => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
};
/* 
    [NOTE: This solution will only work on the sandbox provided online for this particular book, 
    run this code here: https://eloquentjavascript.net/code/#5.4]
*/
