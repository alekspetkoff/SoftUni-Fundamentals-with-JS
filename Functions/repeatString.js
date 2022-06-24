function repeatString(str, rep) {
    let result = "";
    for(let i = 0; i < rep; i++) { 
        result += str;
    }
    console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);