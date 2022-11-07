window.onload = function () {
  "use strict";
  // console.log(ANIMATIONS["DIVE"]);
  let setInt;
  let def = "BLANK";
  const animArray = ANIMATIONS[def].split("=====");
  let frame = 0;
  let timeSpeed = 250;
  document.getElementById("start").addEventListener("click", function () {
    // for(const x of )

    function display() {
      if (animArray.length === frame) {
        frame = 0;
      }
      document.getElementById("text-area").innerHTML = animArray[frame];
      frame++;
    }

    // document.getElementById("stop").disabled = false;
    setInt = setInterval(display, timeSpeed);

    // alert("hello");
  });

  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(setInt);
    document.getElementById("stop").disabled = true;
  });

  document.getElementById("animation").addEventListener("change", (e) => {
    // document.getElementById("text-area").innerText = e.target.value;
    def = e.target.value;
    const animArray = ANIMATIONS[def].split("=====");

    function display() {
      if (animArray.length === frame) {
        frame = 0;
      }
      document.getElementById("text-area").innerHTML = animArray[frame];
      frame++;
    }

    document.getElementById("stop").disabled = false;
    setInt = setInterval(display, timeSpeed);
    // /console.log(e.target.value);
  });

  document.getElementById("fontsize").addEventListener("change", (e) => {
    // document.getElementById("text-area").innerText = e.target.value;
    let fontSize = e.target.value;
    let font = 12;
    switch (fontSize) {
      case "Tiny":
        font = 7;
        break;
      case "Small":
        font = 10;
        break;
      case "Medium":
        font = 12;
        break;
      case "Large":
        font = 16;
        break;
      case "Extra Large":
        font = 24;
        break;
      case "XXL":
        font = 32;
        break;
    }

    document.getElementById("text-area").style.fontSize = font + "pt";
  });
  document.getElementById("turbo").addEventListener("change", (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      timeSpeed = 50;
    } else {
      timeSpeed = 250;
    }
  });
};
