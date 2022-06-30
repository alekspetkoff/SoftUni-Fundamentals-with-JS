function spaceTravel(arr) {

    let startFuel = Number(arr[1]);
    let startAmmo = Number(arr[2]);
    let newRoute = arr[0].split("||");
    let index = 0;
    
    while (newRoute[index] != "Titan") {
        let currentRoute = newRoute[index].split(" ");
        if(currentRoute[0] === "Travel"){
            if(Number(currentRoute[1]) <= startFuel) {
                console.log(`The spaceship travelled ${currentRoute[1]} light-years.`);
                startFuel = startFuel - Number(currentRoute[1]);
            } else {
                console.log("Mission failed."); break;
            }
        } else if(currentRoute[0] === "Enemy") {
            if(Number(currentRoute[1]) <= startAmmo) {
                startAmmo = startAmmo - Number(currentRoute[1]);
                console.log(`An enemy with ${currentRoute[1]} armour is defeated.`);
            } else {
                let consumedFuel = Number(currentRoute[1]) * 2;
                if(consumedFuel > startFuel) {
                    console.log("Mission failed."); break;
                } else {
                    console.log(`An enemy with ${currentRoute[1]} armour is outmaneuvered.`);
                    startFuel -= consumedFuel;

                }
            }
        } else if(currentRoute[0] === "Repair") {
            startFuel += Number(currentRoute[1]);
            startAmmo += (Number(currentRoute[1]) * 2);
            console.log(`Ammunitions added: ${(Number(currentRoute[1]) * 2)}.`);
            console.log(`Fuel added: ${currentRoute[1]}.`);
        }
        index++;
    }
    if(newRoute[index] === "Titan") {
        console.log("You have reached Titan, all passengers are safe.");
    }
}

spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]);