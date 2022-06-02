function rightPlace(word, ch, result) {

    let res = word.replace('_', ch); // zamestva "_" v promenlivata word sys simvola koito se namira v promenlivata ch!
    console.log(res === result? "Matched" : "Not Matched");
    
    // SECOND WAY OF SOLVING THE TASK!!!
    // let wordReplace = "";
    // for (let i = 0; i < word.length; i++) {
    //     if (word[i] === "_") {
    //         wordReplace += ch;
    //     } else{
    //         wordReplace += word[i];
    //     }
    // }
    // if (wordReplace === result) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Мatched");
    // }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
