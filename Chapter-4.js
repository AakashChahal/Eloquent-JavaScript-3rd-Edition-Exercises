/* ------------ Exercise-1 (The Sum of a Range) ------------ */
const range = function (start, end, step = 1) {
    const newArray = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            newArray.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            newArray.push(i);
        }
    }
    return newArray;
};

console.log(range(1, 10, 2));
// output -> [1, 3, 5, 7, 9]

console.log(range(5, 2, -1));
// output -> [5, 4, 3, 2]

const sum = function (...numbers) {
    let totalSum = 0;
    for (const number of numbers) {
        totalSum += number;
    }
    return totalSum;
};
console.log(sum(...range(1, 10)));
// output -> 55

/* ------------ Exercise-2 (Reversing an Array) ------------ */
const reverseArray = function (array) {
    const newArray = [];
    for (const el of array) {
        newArray.unshift(el);
    }
    return newArray;
};
const array = [1, 2, 3, 4, 5];
const arrayReversed = reverseArray(array);
// arrayReversed -> [5, 4, 3, 2, 1]
// array -> [1, 2, 3, 4, 5]

const reverseArrayInPlace = function (array) {
    for (const el of [...array]) {
        array.unshift(el);
        array.pop();
    }
};

reverseArrayInPlace(array);
// array -> [5, 4, 3, 2, 1]

/* ------------ Exercise-3 (A List) ------------ */
const arrayToList = function (arr) {
    let list = {};
    let curr;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            list.value = arr[i];
            list.rest = {};
            curr = list.rest;
        } else if (!(i == arr.length - 1)) {
            curr.value = arr[i];
            curr.rest = {};
            curr = curr.rest;
        } else {
            curr.value = arr[i];
            curr.rest = null;
        }
    }
    return list;
};
const newList = arrayToList([1, 2, 3]);

const listToArray = function name(list) {
    let curr = list.rest;
    const newArr = [];
    newArr.push(list.value);
    while (curr.rest != null) {
        newArr.push(curr.value);
        curr = curr.rest;
    }
    newArr.push(curr.value);
    return newArr;
};

console.log(listToArray(newList));
console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = function (element, list) {
    const newList = {};
    if (list == null) {
        newList.value = element;
        newList.rest = null;
    } else {
        newList.value = element;
        newList.rest = list;
    }
    return newList;
};

console.log(prepend(10, prepend(20, null)));

const nth = function (list, number) {
    if (number == 0) return list.value;
    let curr = list.rest;
    let index = 0;
    while (curr.rest != null) {
        index++;
        if (index == number) return curr.value;
        curr = curr.rest;
    }
    return undefined;
};
console.log(nth(arrayToList([10, 20, 30]), 1));

// recursive version of function nth
const nthRecursive = function (list, number) {
    if (number == 0) return list.value;
    else if (number != 0 && list.rest == null) return undefined;
    else return nthRecursive(list.rest, number - 1);
};

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

/* ------------ Exercise-4 (Deep Comparison) ------------ */
const deepEqual = function (value1, value2) {
    if (value1 == value2) return true;
    else if (typeof value1 != "object" || typeof value2 != "object")
        return false;
    else if (typeof value1 === "object" && typeof value2 === "object") {
        if (value1.length != value2.length || value2 == null || value1 == null)
            return false;
        let keys1 = Object.keys(value1);
        let keys2 = Object.keys(value2);
        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(value1[key], value2[key]))
                return false;
        }
    }
    return true;
};
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
