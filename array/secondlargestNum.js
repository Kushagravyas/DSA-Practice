// Find second largest number in array.

function secondLargestNumber (arr) {
   let max = -Infinity, second = -Infinity;

   for (let num of arr) {
    if (num > max){
        second = max;
        max = num;
    } else if (num > second && num !== max){
        second = num;
    }
   }
   return second === -Infinity ? null : second;
}
console.log(secondLargestNumber([1,2,3,4,5,6,7,8]))


function secondNum (arr) {
    let max = -Infinity, second= -Infinity;
    
    for (let num of arr) {
        if (num > max){
            second = max;
            max = num;
        } else if (num > second && num !== max){
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

console.log(secondNum([29,42,65,88,]))