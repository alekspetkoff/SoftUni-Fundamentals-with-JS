function cookingMasterclass(array) {
    let students = array[1];
    let budget = array[0];
    let priceFlour = array[2];
    let priceEgg = array[3];
    let priceApron = array[4];
    let counter = 0;
    counter = Math.floor(students / 5);
    let totalPriceFlour = priceFlour * (students - counter);
    let totalPriceEggs = priceEgg * 10 * students;
    let totalPriceApron = priceApron * Math.ceil((students + (0.20 * students)));

   
    let totalPriceEverything = totalPriceEggs + totalPriceApron + totalPriceFlour;
    if (totalPriceEverything <= budget) {
        console.log(`Items purchased for ${(totalPriceEverything).toFixed(2)}$.`);
    } else {
        console.log(`${(totalPriceEverything - budget).toFixed(2)}$ more needed.`)
    }
}

cookingMasterclass([50,
    2,
    1.0,
    0.10,
    10.0]);
