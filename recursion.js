//Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
//Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
    if (num === 1) {
        return 1;
    }

    return num + sumRange(num - 1); 
}

// let output = sumRange(3)
// console.log(output); //6


//Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
// Sample:
// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

function power(base, exponent) {
    if(exponent === 0) return 1;

    return base * power(base, exponent - 1);
}

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

//Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number 
//multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Sample:
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num) {
    if(num === 1)  return 1;

    return num * factorial(num - 1);
}

console.log(factorial(5)); // 120


//Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when 
//passed as parameter to the callback function
// Sample:
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven); // false

function all(array, callback){
    var copy = copy || array.slice(); // shallow copies array

    if (copy.length === 0) return true;

    if(callback(copy[0])){
        copy.shift(); // remove first element from array
        return all(copy, callback);
    } else {
        return false;
    }
}

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// Sample:
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60
// console.log(six, sixty);

function productOfArray(array){
    if(array.length === 0){
        return;
    } else if (array.length === 1) {
        return array[0];
    }

    if(array[0]){
        array[1] *= array[0];
        array.shift();
        return productOfArray(array);
    }
}

// Answer
var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

console.log(six, sixty);

function productOfArray(array){ //more simple and efficient than my answer
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
} 

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, searchValue){
    // base case: if the one of the conditions is met, it means that the object is not an object itself, but rather a primitive value or null
    if(typeof object !== "object" || object === null){
        return object === searchValue;
    }
    // Recursive case: if the object is an Object (but not null), iterate over its values
    for (const value of Object.values(object)) {
        // Recursively call contains for each value
        if (contains(value, searchValue)) {
            return true; // If the searchValue is found in any nested object, return true
        }
    }
    return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);


// Given a multi-dimensional integer array, return the total number of integers stored inside this array
// Sample:
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(array = []){
    if(array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if (Array.isArray(first)){
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total + 1;
    }

    return totalIntegers();
}

// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(array = []){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

//The function should return an array containing repetitions of the number argument.
//For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
// Sample:
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function replicate(times, num) {
    if(times <= 0) return [];

    return [num].concat(replicate(times - 1, num));
}