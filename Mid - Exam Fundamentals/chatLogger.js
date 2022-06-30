function chatLogger(arr) {
    let newArr = arr;
    let index = 0;
    let finalArr = [];

    while(newArr[index] != "end") {

        let tempArr = newArr[index].split(" ");
        if(tempArr[0] === "Chat") {
            finalArr.push(tempArr[1]);
        } else if (tempArr[0] === "Delete") {
            if (finalArr.includes(tempArr[1])) {
                let myIndex = finalArr.indexOf(tempArr[1]);
                let removed = finalArr.splice(myIndex, 1);
            } else {
                index++;
                continue;
            }
        } else if(tempArr[0] === "Edit") {
            if (finalArr.includes(tempArr[1])) {
                let myIndex = finalArr.indexOf(tempArr[1]);
                let removed = finalArr.splice(myIndex, 1, tempArr[2]);
            } else {
                index++;
                continue;
            }
        } else if (tempArr[0] === "Pin") {
            if (finalArr.includes(tempArr[1])) {
                let myIndex = finalArr.indexOf(tempArr[1]);
                let removed = finalArr.splice(myIndex, 1);
                finalArr.push(removed[0]);
            } else {
                index++;
                continue;
            }
        } else if (tempArr[0] === "Spam") {
            for(let i = 1; i < tempArr.length; i++) {
                finalArr.push(tempArr[i]);
            }
        }
        index++;
    }
    for(let el of finalArr) {
        console.log(el);
    }
    
}

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]);
