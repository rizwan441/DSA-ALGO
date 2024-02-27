function finonachi(n) {
  if (n <= 1) {
    return n;
  } else {
    return finonachi(n - 1) + finonachi(n - 2);
  }
}

console.log("recussision", finonachi(10));

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// // Testing the function
// console.log(fibonacci(10)); // Output: 55
