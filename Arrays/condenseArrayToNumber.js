//Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained. 
/* Examples
For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}. */

function condenseArrayToNumber(arr) {
    
    while (arr.length > 1) {
        let condensed = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = arr[i] + arr[i + 1];
        }
        arr = condensed;
    }
    console.log(arr[0]);
    
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5,0,4,1,2]);