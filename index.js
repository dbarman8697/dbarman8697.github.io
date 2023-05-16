document.querySelector("#menu-icon").addEventListener("click", (event) => {
  const navOptions = document.querySelector("#nav-options");
  const display = navOptions.style.display;
  navOptions.style.display = display == "flex" ? "none" : "flex";
});

function download() {
  let link = document.createElement("a");
  link.href = "Dwipayan-Barman-Resume.pdf";
  link.download = "Dwipayan-Barman-Resume.pdf";
  link.click();
  link.remove();
}

function redirect() {
  window.open("Dwipayan-Barman-Resume.pdf");
}

document
  .getElementById("resume-button-1")
  .addEventListener("click", function () {
    redirect();
    download();
  });

document
  .getElementById("resume-button-2")
  .addEventListener("click", function () {
    redirect();
    download();
  });

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keycode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keycode == "I".charCodeAt) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keycode == "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keycode == "J".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keycode == "I".charCodeAt(0)) {
    return false;
  }
};
