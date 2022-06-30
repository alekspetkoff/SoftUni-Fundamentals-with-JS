function arrayRotation(arr, rotations) {
    while (rotations > 0) {
        let element = arr.shift();
        arr.push(element);
        rotations--;
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);