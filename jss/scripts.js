// ✅ Use 'const' for elements you select once
const hairButton = document.getElementById("hair");
const earButton = document.getElementById("ear");
const buttonContainer = document.getElementById("button-container"); // Assuming your buttons are inside this container

// ✅ Use consistent, descriptive variable names for classes
const ACTIVE_CLASS = "buttonclicked";

const HAIR_STYLES_SELECTOR = ".hair-styles-hidden"; // Use a class selector for querySelectorAll
const EAR_STYLES_SELECTOR = ".ear-styles-hidden";

const HAIR_STYLES_VISIBLE = "hair-styles-visible";
const HAIR_STYLES_HIDDEN = "hair-styles-hidden"; // Note: this is likely the class you are selecting *from*

// Function to handle disabling/enabling other buttons
function toggleOtherButtons(clickedButton) {
  if (!buttonContainer) return; // Safety check

  const buttons = buttonContainer.querySelectorAll("button");
  const isClickedButtonActive = clickedButton.classList.contains(ACTIVE_CLASS);

  buttons.forEach(function (button) {
    if (button !== clickedButton) {
      // Disable other buttons ONLY if the clicked button is now ACTIVE
      // This allows the clicked button to act as a toggle (enable/disable others)
      button.disabled = isClickedButtonActive;
    }
  });

  console.log(
    clickedButton.id +
      " was clicked. Others are now " +
      (isClickedButtonActive ? "DISABLED" : "ENABLED") +
      "."
  );
}

// Function to handle the category click logic (toggling visibility/class)
function handleCategoryClick(
  button,
  stylesSelector,
  visibleClass,
  hiddenClass
) {
  // 1. Toggle the button's active state
  button.classList.toggle(ACTIVE_CLASS);

  // 2. Toggle the disabled state of OTHER buttons
  toggleOtherButtons(button);

  // 3. Toggle the visibility of the style elements
  // We use querySelectorAll here to get a live list of elements
  const styleElements = document.querySelectorAll(stylesSelector);

  styleElements.forEach((element) => {
    // Toggle the visible class
    element.classList.toggle(visibleClass);

    // Optional: Ensure the hidden class is managed (though usually not needed if styles are properly defined)
    // element.classList.toggle(hiddenClass);
  });
}

// --- Event Listeners ---

if (hairButton) {
  hairButton.addEventListener("click", function () {
    handleCategoryClick(
      hairButton,
      HAIR_STYLES_SELECTOR,
      HAIR_STYLES_VISIBLE,
      HAIR_STYLES_HIDDEN
    );
  });
}

if (earButton) {
  earButton.addEventListener("click", function () {
    // You'll need to define your ear style selectors and classes for this to fully work.
    // I'm using placeholder names here.
    handleCategoryClick(
      earButton,
      EAR_STYLES_SELECTOR,
      "ear-styles-visible", // Assuming you have these
      "ear-styles-hidden" // Assuming you have these
    );
  });
}
