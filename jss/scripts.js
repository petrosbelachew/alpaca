const hairButton = document.getElementById("hair");
const newClassName = "buttonclicked";

if (hairButton) {
  hairButton.addEventListener("click", function () {
    hairButton.classList.toggle(newClassName);
  });
}
