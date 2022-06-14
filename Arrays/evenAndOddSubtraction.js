// Write a program that calculates the difference between the
// sum of the even and the sum of the odd numbers in an array.

function evenAndOddSubtraction(arr) {
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){ 
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    console.log(even - odd);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);