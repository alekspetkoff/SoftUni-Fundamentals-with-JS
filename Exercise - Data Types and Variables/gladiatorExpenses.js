function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let counter = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            expenses += shieldPrice;
            expenses += helmetPrice;
            expenses += swordPrice;
            counter++;
            if (counter % 2 === 0) {
                expenses += armorPrice;
            }
        } else if (i % 2 === 0) {
            expenses += helmetPrice;
        } else if (i % 3 === 0) {
            expenses += swordPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5);
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);