/*
Write a function, which changes the value of odd and even numbers in an array of numbers. 
If the number is even - add to its value its index position
If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
*/
function addAndSubtract(arr) {
    let sumOrig = 0;
    let sumNew = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOrig += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += i;
            sumNew += arr[i];
        } else {
            arr[i] -= i;
            sumNew += arr[i];
        }
    }
    console.log(arr);
    console.log(sumOrig);
    console.log(sumNew);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);