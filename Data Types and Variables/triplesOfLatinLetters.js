function triplesOfLatinLetters(n) { 
    let num = Number(n);
    for (let i = 0; i < num ; i++) {
        for (let j = 0; j < num ; j++) {
            for(let q = 0; q < num ; q++) {
                console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j)}${String.fromCharCode(97 + q)}`);
            }
        }
    }
}

triplesOfLatinLetters('3');
triplesOfLatinLetters('2');