    function amazingNumbers(number) {
        let numToString = String(number);
        let sum = 0;
        for (i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        console.log(sum.toString().includes("9") ? `${number} Amazing? True` : `${number} Amazing? False`);
    }

amazingNumbers(1233);
amazingNumbers(999);


// sum.toString().includes("9") - obryshta chisloto v string i proverqva dali ima 9