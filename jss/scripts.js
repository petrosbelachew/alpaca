const hairButton = document.getElementById("hair");
const newClassName = "buttonclicked";

if (hairButton) {
  hairButton.addEventListener("click", function () {
    hairButton.classList.toggle(newClassName);
  });
}

// or use the check,add, remove

// // Check if the class is ALREADY on the button
//     if (hairButton.classList.contains(newClassName)) {
//         // If it's there, remove it (toggling)
//         hairButton.classList.remove(newClassName);
//         console.log(`Class "${newClassName}" removed.`);
//     } else {
//         // If it's NOT there, add the new class
//         hairButton.classList.add(newClassName);
//         console.log(`Class "${newClassName}" added.`);
//     }
