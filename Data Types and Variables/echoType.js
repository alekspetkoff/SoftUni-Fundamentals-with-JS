function echo(par) {
    console.log(typeof par);
    if (typeof par === "string" || typeof par === "number") {
        console.log(par);
    } else console.log('Parameter is not suitable for printing');
}

echo("Hello, Javascript!");
echo(18);
echo(null);