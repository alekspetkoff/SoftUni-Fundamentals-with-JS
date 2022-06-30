/*
Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index.
*/

function equalSum(arr) {
    let isEqual = true;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        }
        if (rightSum === leftSum) {
            isEqual = true;
            console.log(i); break;
        } else {
            isEqual = false;
        }
    }
    if (isEqual === false) {
        console.log('no');
    }
}

equalSum([1]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);