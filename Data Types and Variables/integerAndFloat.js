function integerAndFloat(numA, numB, numC) {
    let sum = numA + numB + numC;
    sum % 1 === 0? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}

integerAndFloat(9, 100, 1.1 );
integerAndFloat(100, 200, 303);