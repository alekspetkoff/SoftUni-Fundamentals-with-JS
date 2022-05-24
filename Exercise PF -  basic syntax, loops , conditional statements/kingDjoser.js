function kingDjoser(base, increment) {
    let step = 1;
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    while (base != 1 && base != 2) {
        if (step % 5 == 0) {
            stone = stone + ((base - 2) * (base - 2) * increment);
            lapis = lapis + ((base * 4 - 4) * increment);
        } else {
            stone = stone + ((base - 2) * (base - 2) * increment);
            marble = marble + ((base * 4 - 4) * increment);
        }
        base -= 2;
        step++;
    }
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(base * base * increment)}`)
    console.log(`Final pyramid height: ${Math.floor((step) * increment)}`);
}

kingDjoser(11, 0.75);