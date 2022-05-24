function distance(x1,y1,x2,y2) {
    let distance = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    console.log(Math.sqrt(distance));
}

distance(2, 4, 5, 0);
distance(2.34, 15.66, -13.55, -2.9985);