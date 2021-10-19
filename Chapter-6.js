// Exercise-1 (A Vector Type)
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Exercise-2 (Groups)
class Group {
    constructor() {
        this.group = [];
    }

    add(val) {
        if (!this.has(val)) this.group.push(val);
    }

    delete(val) {
        if (this.has(val)) this.group.splice(this.group.indexOf(val));
    }

    has(val) {
        return this.group.includes(val);
    }

    static from(obj) {
        let grp = new Group();
        for (const el of obj) {
            grp.add(el);
        }
        return grp;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Exercise-3 (Iterable Groups)
class GroupIterator {
    constructor(groupIt) {
        this.groupIt = groupIt;
        this.pos = 0;
    }

    next() {
        let result = {};
        if (this.pos <= this.groupIt.group.length - 1) {
            result.value = this.groupIt.group[this.pos];
            result.done = false;
            this.pos++;
        } else {
            result.value = null;
            result.done = true;
            this.pos = 0;
        }
        return result;
    }
}

// this works becauze I've added [Symbol.Iterator]() to the above class at line: 54
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

// Exercise-4 (Borrowing a Method)

let map = { one: true, two: true, hasOwnProperty: true };

// console.log(map.hasOwnProperty("one")); // produces error as hasOwnProperty is updated to a "true" for this map

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
