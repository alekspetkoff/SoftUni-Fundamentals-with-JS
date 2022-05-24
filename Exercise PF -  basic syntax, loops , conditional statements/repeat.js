function rep(num) {
    let row = '';
    for (let i = 1; i <= num; i++){
        row = i + " ";
        console.log(row.repeat(i));
    }
}
rep(3);