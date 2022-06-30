function maxSeq(arr) {

    let maxSequence = [];
    for(let i = 0; i < arr.length; i++) {
        let currentSequence = [];
        for(let j = i; j < arr.length; j++){ 
            if(arr[j] === arr[i]) {
                currentSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if(currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(" "));
}

maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq([1, 1, 1,1, 2, 3, 1, 3, 3]);