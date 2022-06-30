function phoneShop(arr) {

    let phoneList = arr[0].split(", ");
    let index = 1; 

     while(arr[index] != "End") {
        let newArr = arr[index].split(" - ");
        if (newArr[0] === "Add") {
           if(phoneList.includes(newArr[1])){
            index++;
            continue;
           } else {
            phoneList.push(newArr[1]);
           }
        } else if (newArr[0] === "Remove"){
            if(phoneList.includes(newArr[1])){
                let myIndex = phoneList.indexOf(newArr[1]);
                let removed = phoneList.splice(myIndex, 1);
            } else {
                index++;
                continue;
            } 
        } else if (newArr[0] === "Bonus phone") {
            //if the oldphone exist, add the new phone after the old one
            // otherwise ignore command
            let newOldPhone = newArr[1].split(":");
            if(phoneList.includes(newOldPhone[0])) {
                let myIndex = phoneList.indexOf(newOldPhone[0]);
                phoneList.splice((myIndex + 1), 0 ,newOldPhone[1]);
            } else {
                index++;
                continue;
            }
        } else if (newArr[0] === "Last") {
            //if the phone exist, put it in last position, otherwise ignore command
            if(phoneList.includes(newArr[1])) {
                let myIndex = phoneList.indexOf(newArr[1]);
                phoneList.push(newArr[1]);
                let removed = phoneList.splice(myIndex, 1);
            } else {
                index++;
                continue;
            }
        }
        index++;
    }
    console.log(phoneList.join(', '));
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"]);