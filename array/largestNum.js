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

// Check if array is sorted 

function isSorted (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1])  return false;
        }
         return true;
    }

    console.log(isSorted([2,4,6,45,67,89]))

function isOk (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

console.log(isOk([2,4,1,6]))

// Reverse a Array (in-place)

function reverseArray (arr) {
    let start = 0, end = arr.length-1;
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6]))


function changeArray (arr) {
    let start = 0; end = arr.length-1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

console.log(changeArray([9,8,7]))


// Insert elements at given index.

function insertAtIndex (arr, index, value) {
    if (index < 0 || index > arr.length) return arr;
    arr.splice(index, 0, value);
    return arr;
}
console.log(insertAtIndex([1, 2, 3, 4], 2, 6))

function deleteInsertAt (arr, index, ) {
    if (index < 0 || index > arr.length) return arr;
    arr.splice(index, 2, 2,3);
    return arr;
}

console.log(deleteInsertAt([1, 4, 5, 4], 1, 2, 2, 3 ))

