
//Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

function sumEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++) {
        let k = Number(arr[i]);
        if (k % 2 === 0) {
            sum += k;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['2','4','6','8','10']);