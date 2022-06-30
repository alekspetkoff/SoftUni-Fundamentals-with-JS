function theHuntingGame(input) {
    let i = 0;
    let totalDays = Number(input[i]);
    i++;
    let playerCount = Number(input[i]);
    i++;
    let groupEnergy = Number(input[i]);
    i++;
    let water = Number(input[i]);
    i++;
    let food = Number(input[i]);
    i++;

    let totalWater = totalDays * playerCount * water; 
    let totalFood = totalDays * playerCount * food;

    let daysCount = 0;

    while(i <= input.length - 1) {
        
        let energyLost = Number(input[i]);
        daysCount++;
        if(daysCount % 2 == 0) {
            groupEnergy = groupEnergy - energyLost;
            if (groupEnergy > 0) {
                //boosting 5% energy and totalwater drops by 30%
                totalWater = totalWater - (totalWater * 0.30);
                groupEnergy = groupEnergy + (groupEnergy * 0.05);
            } else {
                console.log(`You will run out of energy. You will be left with ${totalFood} food and ${totalWater.toFixed(2)} water. `)
                break;
            }
            
        } else if (daysCount % 3 == 0) {
            groupEnergy = groupEnergy - energyLost;

            if (groupEnergy > 0) {
            // eating (current food/ count of people)
            groupEnergy = groupEnergy + (groupEnergy * 0.10);
            totalFood = totalFood - (totalFood / playerCount);
            } else {
                console.log(`You will run out of energy. You will be left with ${totalFood} food and ${totalWater.toFixed(2)} water. `)
                break;
            }
        } else {
            groupEnergy = groupEnergy - energyLost;
        }
        i++;
    } 
    if (groupEnergy > 0) {
        console.log(groupEnergy)
    }
}
theHuntingGame(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"]);