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
  
