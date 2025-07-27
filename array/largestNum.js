// Find largest number in Array.

function largestNumber (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

console.log(largestNumber([5,3,6,9,2,1]));


function findLargest (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) max = arr[i]
    }

    return max;
}

console.log(findLargest([2,3,4,5,6,7,8]))

function findNumber (arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

console.log(findNumber([1,3,4,5,7,8]))

function findNum (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(findNum([12,34,56,78,78]))

function findNum (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max ) max = arr[i];
  }
  return max;
}

console.log(findNum([2,5,8,9]))
