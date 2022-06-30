function maxNumber(arr) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        let isMax = true;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] <= arr[j]){
                isMax = false;
            }
        }
        if(isMax === true) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);