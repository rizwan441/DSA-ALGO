function Fibonacci(num) {
  let prev0 = 0;
  let prev1 = 1;
  const result = [prev0, prev1];

  for (let i = 0; i <= num; i++) {
    let newResult = prev0 + prev1;
    result.push(newResult);
    prev0 = prev1;
    prev1 = newResult;
  }
  return result;
}

console.log("first", Fibonacci(18));
