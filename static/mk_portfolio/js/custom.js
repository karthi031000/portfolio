async function typesent(text, elebyref, delay=40) {
    var letters = text.split("");
    var i = 0;
    while(i < letters.length){
        await waitforMS(delay);
        $(elebyref).append(letters[i]);
        i++
    }
    return;
}

function waitforMS(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deletesent(elebyref) {
    var sentence = $(elebyref).html();
    var letters = sentence.split("");
    while(letters.length > 0){
        await waitforMS(40);
        letters.pop();
        $(elebyref).html(letters.join(""));
    }
}

typesent("whoami", "#sentence")

deletesent("#sentence")