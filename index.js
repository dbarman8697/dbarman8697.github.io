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
