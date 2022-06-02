function specialNumbers(n) {
    for (i = 1; i <= n; i++) {
        let num = i;
        let sum = 0;
        let isSpecial = false;
        while(parseInt(num) != 0) { 
            sum = sum + (parseInt(num) % 10);
            num = num/10;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
        }
        isSpecial? console.log(`${i} -> True`) : console.log(`${i} -> False`);
    }
}

specialNumbers(15);