function bitcoinMining(input) {
    let bitcoin = 11949.16;
    let goldGram = 67.51;
    let boughtBitcoin = 0;
    let dayPurchased = 0;
    let totalCash = 0;
    let count = 0;
    
    for (let i = 1; i <= input.length; i++) {
        let minedGold = input[count];
        if (i % 3 == 0) {
            minedGold = minedGold - minedGold * 0.30;
            totalCash = totalCash + minedGold * goldGram;
        } else {
            totalCash = totalCash + minedGold * goldGram;
        }
        if (totalCash >= bitcoin) {
            if (dayPurchased == 0) {
                dayPurchased = i;
                while (totalCash > bitcoin) {
                    totalCash = totalCash - bitcoin;
                    boughtBitcoin++;
                }
            } else {
                while (totalCash > bitcoin) {
                    totalCash = totalCash - bitcoin;
                    boughtBitcoin++;
                }
            }
        }
        count++;
    }
    if (boughtBitcoin == 0) {
        console.log(`Bought bitcoins: ${boughtBitcoin}`);
        console.log(`Left money: ${totalCash.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${boughtBitcoin}`);
        console.log(`Day of the first purchased bitcoin: ${dayPurchased}`)
        console.log(`Left money: ${totalCash.toFixed(2)} lv.`);
    }
}

bitcoinMining([100, 200, 300]);