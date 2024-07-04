//Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
//Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

let output = sumRange(3)
console.log(output);

function sumRange(num) {
    if (num === 1) {
        return 1;
    }

    return num + sumRange(num - 1); 
}
