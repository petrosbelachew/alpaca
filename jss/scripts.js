const hairButton = document.getElementById("hair");
const harClass = "buttonclicked";

const hairStyles = document.getElementsByClassName("hair-styles-hidden");
const hairStylesVisible = "hair-styles-visible";
const hairStyleHidden = "hair-styles-hidden";

if (hairButton) {
  hairButton.addEventListener("click", function () {
    hairButton.classList.toggle(harClass);
    // Use classList.remove() to make it visible
    // Loop through every element in the collection
    for (let i = 0; i < hairStyles.length; i++) {
      const element = hairStyles[i];

      // 1. Remove the 'hidden' class
      element.classList.remove(hairStyleHidden);

      // 2. Add the 'visible' class
      element.classList.toggle(hairStylesVisible);

      // NOTE: A cleaner approach is to use toggle() on both
      // element.classList.toggle(hairStyleHidden);
      // element.classList.toggle(hairStylesVisible);
    }
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
