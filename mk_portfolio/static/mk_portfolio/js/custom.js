let cmdlist = ["whoami", "history | grep jobs", "locate projects", "tar -xf skills.tar", "ls certificates", "cat contacts.txt"]

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
}, 1000);

async function typesent(text, elebyref, currentSectionIndex, delay=30) {
    var letters = text.split("");
    var i = 0;
    while(i < letters.length){
        await waitforMS(delay);
        $(elebyref).append(letters[i]);
        i++
    }
    if(currentSectionIndex === 1){
      await waitforMS(100)
      let animation_fade = document.querySelectorAll("[id^='fadein-']");
      animation_fade.forEach((element) => {
          element.classList.add("event-animation"); 
      });
      let animation_pulse = document.querySelectorAll("[id^='pulse-']");
      animation_pulse.forEach((element) => {
          element.classList.add("circle-animation"); 
      });
      let scroll = document.getElementById("scroll")
      scroll.classList.remove("scroller");
    }
    else if (currentSectionIndex === 4){
      await waitforMS(100)
      let animation_pop = document.querySelectorAll("[id^='cert']");
      animation_pop.forEach((element) => {
        element.classList.add("cert-animation");
      })
      let scroll = document.getElementById("scroll")
      scroll.classList.remove("scroller");
    }
    else if (currentSectionIndex === 2){
      await waitforMS(100)
      let animation_pop = document.querySelectorAll(".card");
      animation_pop.forEach((element) => {
        element.classList.add("cert-animation");
      })
      let scroll = document.getElementById("scroll")
      scroll.classList.remove("scroller");
    }
    else if (currentSectionIndex === 3){
      await waitforMS(100)
      let animation_pop = document.querySelectorAll(".skill");
      animation_pop.forEach((element) => {
        element.classList.add("skill-animation");
      })
      animation_pop = document.querySelectorAll(".icon-name");
      animation_pop.forEach((element) => {
        element.classList.add("skill-animation");
      })
      let scroll = document.getElementById("scroll")
      scroll.classList.remove("scroller");
    }
    else if (currentSectionIndex === 5){
      let scroll = document.getElementById("scroll")
      scroll.classList.add("scroller");
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
    // event.preventDefault();
    $( document ).ready(async function() {
        deletesent("#sentence");
        await waitforMS(275);
        scrollToSection(currentSectionIndex + 1);
        event.preventDefault();
        typesent(cmdlist[currentSectionIndex], "#sentence", currentSectionIndex)
      });
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    event.preventDefault();
    $( document ).ready(async function() {
        deletesent("#sentence");
        await waitforMS(275);
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
        // event.preventDefault(); 
      $( document ).ready(async function() {
          deletesent("#sentence");
          await waitforMS(250);
          scrollToSection(currentSectionIndex + 1);
          event.preventDefault();
          typesent(cmdlist[currentSectionIndex], "#sentence", currentSectionIndex)
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


  let startY = 0;

window.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
});

window.addEventListener("touchmove", (event) => {
    if (isScrolling) return;
    isScrolling = true;
    const touchY = event.touches[0].clientY;
    const deltaY = touchY - startY;
    if (deltaY < 0 && currentSectionIndex < sections.length - 1) {
        $( document ).ready(async function() {
            deletesent("#sentence");
            await waitforMS(275);
            scrollToSection(currentSectionIndex + 1);
            event.preventDefault();
            typesent(cmdlist[currentSectionIndex], "#sentence", currentSectionIndex);
        });
    } else if (deltaY > 0 && currentSectionIndex > 0) {
        event.preventDefault();
        $( document ).ready(async function() {
            deletesent("#sentence");
            await waitforMS(275);
            scrollToSection(currentSectionIndex - 1);
            event.preventDefault();
            typesent(cmdlist[currentSectionIndex], "#sentence");
        });
    }
    setTimeout(() => isScrolling = false, 800);
}, { passive: false });