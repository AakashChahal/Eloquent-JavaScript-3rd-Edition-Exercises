// Exercise-1 (Looping a triangle)
let strTriangle = "#";
while (strTriangle.length <= 7) {
    console.log(strTriangle);
    strTriangle += "#";
}

// Exercise-2 (FizzBuzz)
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// Exercise-3 (Chessboard)
const size = 8;
let outputStr = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) outputStr += " ";
        else outputStr += "#";
    }
    outputStr += "\n";
}
console.log(outputStr);
