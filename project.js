function fibs(n){
    let array = []
    while(n >= 2){
        array.unshift(n-1)//i give up lol 
    }
}

function fibsRec(n, result = [0, 1]) {
    // Base cases
    if (n <= 0) {
      return [];
    }
    if (n === 1) {
      return [0];
    }
    if (result.length >= n) {
      return result.slice(0, n); // Return only the first n elements
    }
  
    // Calculate the next Fibonacci number and add it to the result array
    result.push(result[result.length - 1] + result[result.length - 2]);
  
    // Recursively call fibsRec to continue building the sequence
    return fibsRec(n, result);
  }
  
  // Example usage:
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  

let array = [3, 2, 1, 13, 8, 5, 0, 1];
 
function mergeSort(array) {
    if (array.length <= 1) {
        return array; // Fixed: should return 'array' instead of 'input'
    } 

    let chunk = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, chunk)); // Recursively sort the left half
    let right = mergeSort(array.slice(chunk));   // Recursively sort the right half

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}



let output = mergeSort(array);
console.log(output);