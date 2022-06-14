function reverseAnArrayOfNumbers(n, arr) {

    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    let output = "";
    for (let i = newArr.length - 1; i >= 0 ; i--) {
        output += newArr[i] + " ";
    }
    console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);