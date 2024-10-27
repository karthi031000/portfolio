let cmdlist = ["whoami", "history | grep jobs", "ls Projects", "unzip skills.zip"]

async function typesent(text, elebyref, delay=30) {
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
        await waitforMS(10);
        letters.pop();
        $(delref).html(letters.join(""));
    }
}

function waitforMS(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;        
let isScrolling = false;
function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSectionIndex = index;
    //deletesent("#sentence")
  }
}

if(currentSectionIndex == 0){
    typesent(cmdlist[currentSectionIndex], "#sentence");
  }
window.addEventListener("wheel", (event) => {
  if (isScrolling) return;  
  isScrolling = true;  
  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    event.preventDefault();
    $( document ).ready(async function() {
        deletesent("#sentence");
        await waitforMS(250);
        scrollToSection(currentSectionIndex + 1);
        event.preventDefault();
        typesent(cmdlist[currentSectionIndex], "#sentence")
      });
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    event.preventDefault();
    $( document ).ready(async function() {
        deletesent("#sentence");
        await waitforMS(250);
        scrollToSection(currentSectionIndex - 1);
        event.preventDefault();
        typesent(cmdlist[currentSectionIndex], "#sentence")
      });
  }
  

  setTimeout(() => isScrolling = false, 800);
});


window.addEventListener("keydown", (event) => {
    if (isScrolling) return;  
    isScrolling = true;  
    if (event.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
        event.preventDefault(); 
      $( document ).ready(async function() {
          deletesent("#sentence");
          await waitforMS(250);
          scrollToSection(currentSectionIndex + 1);
          event.preventDefault();
          typesent(cmdlist[currentSectionIndex], "#sentence")
        });
    } else if (event.key === 'ArrowUp' && currentSectionIndex > 0) {
        event.preventDefault();
      $( document ).ready(async function() {
          deletesent("#sentence");
          await waitforMS(250);
          scrollToSection(currentSectionIndex - 1);
          event.preventDefault();
          typesent(cmdlist[currentSectionIndex], "#sentence")
        });
    }
    
  
    setTimeout(() => isScrolling = false, 800);
  });