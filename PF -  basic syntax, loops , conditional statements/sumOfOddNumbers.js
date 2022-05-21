function sumOfOddNumbers(numOfOdds) {
    let check = 0;
    let sum = 0;
    let start = 1;

    while (check !== numOfOdds) {
        if (start % 2 != 0) {
            console.log(start);
            sum += start;
            start++;
            check++;
        } else {
            start++;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);