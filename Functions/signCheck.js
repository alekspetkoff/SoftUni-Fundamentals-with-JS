function signCheck(numOne, numTwo, numThree) {
    let negative = 0;
    if(numOne < 0) {
        negative++;
    }
    if(numTwo < 0) {
        negative++;
    }
    if(numThree < 0) {
        negative++;
    }
    if(negative % 2 === 0) {
        console.log("Positive");
    } else console.log("Negative");
}
signCheck(-1,
    -2,
    -3);
signCheck(-6,
    -12,
     14);