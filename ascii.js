window.onload = function () {
  "use strict";
  let frame = 0;
  let timer = null;
  let size = document.getElementById("fontsize").value;
  let turbo = 250;

  document.getElementById("start").onclick = function () {
    document.getElementById("start").disabled =
      !document.getElementById("start").disabled;
    document.getElementById("stop").disabled =
      !document.getElementById("stop").disabled;
    document.getElementById("animation").disabled =
      !document.getElementById("animation").disabled;
    timer = setInterval(display, turbo);
  };

  document.getElementById("stop").onclick = function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    display("idle");
    document.getElementById("start").disabled =
      !document.getElementById("start").disabled;
    document.getElementById("stop").disabled =
      !document.getElementById("stop").disabled;
    document.getElementById("animation").disabled =
      !document.getElementById("animation").disabled;
  };

  document.getElementById("animation").onchange = function () {
    frame = 0;
    display("idle");
  };

  document.getElementById("fontsize").onchange = function () {
    size = document.getElementById("fontsize").value;
    document.getElementById("text-area").className = size;
    resetInterval();
  };

  document.getElementById("turbo").onchange = function () {
    turbo = document.getElementById("turbo").checked ? 50 : 250;
    resetInterval();
  };

  function display(state) {
    let txtarea = document.getElementById("text-area");

    if (state === "idle") {
      txtarea.value = ANIMATIONS[document.getElementById("animation").value];
    } else {
      let parts =
        ANIMATIONS[document.getElementById("animation").value].split("=====");

      if (parts.length === frame) {
        frame = 0;
      }

      txtarea.value = parts[frame];
    }

    frame++;
  }

  function resetInterval() {
    if (timer) {
      clearInterval(timer);
      timer = setInterval(display, turbo);
    }
  }
};
