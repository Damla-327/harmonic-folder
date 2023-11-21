// console.log("test");

const subHeaders = [
    "top-notch web design components.",
    "forging ahead with elite web designs.",
    "take the fast lane to mastery.",
    "bring your projects to life, quicker than ever.",
  ];
  
  const items = document.querySelectorAll("#item-1, #item-2, #item-3, #item-4");
  const placeholder = document.querySelector(".placeholder");
  const subheader = document.querySelector("#subheader");
  
  function changeColors() {
    gsap.to(".container", { backgroundColor: "#000", duration: 0.5 });
    gsap.to(".placeholder, nav, footer, p", { color: "#fff", duration: 0.5 });
  }
  
  function revertColors() {
    gsap.to(".container", { backgroundColor: "#e3e3e3", duration: 0.5 });
    gsap.to(".placeholder, nav, footer, p", { color: "#000", duration: 0.5 });
  };


  
//   items.forEach((item) => {
//     item.addEventListener("mouseover", changeColors);
//     item.addEventListener("mouseout", revertColors);
//   });
  
  function animateScale(element, scaleValue) {
    gsap.fromTo(element, { scale: 1 }, { scale: scaleValue, duration: 2, ease: "power1.out" });
  }
  
  function wrapLetters(text) {
    placeholder.innerHTML = "";
    [...text].forEach((letter) => {
      const span = document.createElement("span");
      span.style.filter = "blur(8px)";
      span.textContent = letter;
      placeholder.appendChild(span);
    //   console.log(placeholder);
    });
  }
  
  function animateBlurEffect() {
    const letters = placeholder.children;
    let index = 0;
  
    function clearNextLetter() {
      if (index < letters.length) {
        gsap.to(letters[index], { filter: "blur(0px)", duration: 0.5 });
        index++;
        if (index < letters.length) {
          setTimeout(clearNextLetter, 100);
        }
      }
    }
  
    setTimeout(clearNextLetter, 0);
  }
  
  function shuffleLetters(finalText) {
    // finalText = finalText.textContent;
    wrapLetters("");
    wrapLetters(finalText);

    let textArray = finalText.split("");
    console.log(textArray);
    let shufflingCounter = 0;
    let intervalHandles = [];
  
    function shuffle(index) {
        // console.log(textArray);
      if (shufflingCounter < 30) {
        textArray[index] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
        // console.log(textArray);
        placeholder.children[index].textContent = textArray[index];
      } else {
        placeholder.children[index].textContent = finalText.charAt(index);
        clearInterval(intervalHandles[index]);
      }
    }
  
    for (let i = 0; i < finalText.length; i++) {
      intervalHandles[i] = setInterval(shuffle, 80, i);
    }
  
    setTimeout(() => {
      shufflingCounter = 30;
      for (let i = 0; i < finalText.length; i++) {
        placeholder.textContent = finalText.charAt(i);
        clearInterval(intervalHandles[i]);
      }
      animateBlurEffect();
    }, 1000);
  }
  
  function updatePlaceholderText(event) {
    // const newText = event.target.textContent.toUpperCase();
    // const itemIndex = Array.from(items).indexOf(event.target);
    // const newSubHeaderText = subHeaders[itemIndex].toUpperCase();
  
    // subheader.textContent = newSubHeaderText;
    animateScale(placeholder, 1.25);
    shuffleLetters(placeholder.textContent);
  }
  
  function resetPlaceholderText() {
    const defaultText = "Skeleton FLY";
    const defaultSubHeaderText = "Welcome to Skeleton Fly.";
  
    subheader.textContent = defaultSubHeaderText;
    animateScale(placeholder);
    shuffleLetters(defaultText);
  };
  
//   items.forEach((item) => {
//     item.addEventListener("mouseover", updatePlaceholderText);
//     item.addEventListener("mouseout", resetPlaceholderText);
//   });

  window.addEventListener("load", function(e){
    changeColors();
    updatePlaceholderText(e);

    setTimeout(function(){
        revertColors();
        placeholder.innerHTML = "Skeleton FLY";
    }, 1000);
  })
