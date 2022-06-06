function spiceMustFlow(startYield) {
    let days = 0;
    let spiceExtracted = 0;

    while(startYield >= 100) {
        days++;
        spiceExtracted += (startYield - 26);
        startYield -= 10;
    }
    if (spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }
    console.log(days);
    console.log(spiceExtracted);
}

spiceMustFlow(111);
spiceMustFlow(450);