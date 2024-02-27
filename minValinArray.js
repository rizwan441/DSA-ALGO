const myArr = [5, 4, 3, 7, 6, 8];

let minVal = myArr[0];

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] < minVal) {
    minVal = myArr[i];
  }
}

console.log("first", minVal);

// / TO find the maximum value in a array;

const maxNum = Math.max(...myArr);

console.log("seconf", maxNum);
