function equalArrays(arrOne, arrTwo) {

    for (let i = 0; i < arrOne.length; i++) {
        arrOne[i] = Number(arrOne[i]);
    }
    for (let i = 0; i < arrTwo.length; i++) {
        arrTwo[i] = Number(arrTwo[i]);
    }

    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arrOne.length; i++) {
        sum += arrOne[i];
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false;
            break;
        }
    }

    if (areEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
console.log('----------------');
equalArrays(['1'], ['10']);
