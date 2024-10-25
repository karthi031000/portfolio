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

async function deletesent(delref) {
    var sentence = $(delref).html();
    var letters = sentence.split("");
    while(letters.length > 0){
        await waitforMS(40);
        letters.pop();
        $(delref).html(letters.join(""));
    }
}

function waitforMS(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


$( document ).ready(async function() {
    typesent("whoami", "#sentence");
    await waitforMS(2000);
    deletesent("#sentence");
  });