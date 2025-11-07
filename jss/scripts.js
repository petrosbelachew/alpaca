// --- New Data Structure to Map Buttons to their Style Containers ---
const STYLE_MAP = {
  hair: {
    selector: ".hair-styles-hidden, .hair-styles-visible", // Select both possible states
    visibleClass: "hair-styles-visible",
    hiddenClass: "hair-styles-hidden",
  },
  ear: {
    selector: ".ear-styles-hidden, .ear-styles-visible",
    visibleClass: "ear-styles-visible",
    hiddenClass: "ear-styles-hidden",
  },
  // Add other categories here (e.g., "eyes", "neck", etc.)
};

const ALL_CATEGORY_BUTTONS_SELECTOR = ".category-button";
const ACTIVE_CLASS = "buttonclicked";

// Function to disable/enable other category buttons
function toggleOtherButtons(clickedButton, isNowActive) {
  const buttonContainer = document.getElementById("button-container");
  if (!buttonContainer) return;

  const buttons = buttonContainer.querySelectorAll("button");
  buttons.forEach(function (button) {
    if (button !== clickedButton) {
      // Disable other buttons if the clicked one is now ACTIVE (isNowActive = true)
      button.disabled = isNowActive;
    }
  });
}

// 🎯 The Fix: The revised universal category handler
function handleCategoryClick(clickedButton) {
  const categoryId = clickedButton.id;

  // Check if the button was active BEFORE the toggle
  const wasActive = clickedButton.classList.contains(ACTIVE_CLASS);

  // --- 1. Toggle the clicked button's state and determine the new state ---
  // If it was active, toggle off. If it was inactive, we are turning it on.
  // We only want to turn it ON if it was NOT active.

  if (wasActive) {
    // Case A: Clicking the active button -> Turn it OFF
    clickedButton.classList.remove(ACTIVE_CLASS);
  } else {
    // Case B: Clicking an inactive button -> Turn it ON (and deactivate others)
    clickedButton.classList.add(ACTIVE_CLASS);

    // --- MUTUAL EXCLUSION: Deactivate all other buttons' classes ---
    const allCategoryButtons = document.querySelectorAll(
      ALL_CATEGORY_BUTTONS_SELECTOR
    );
    allCategoryButtons.forEach((button) => {
      if (button.id !== categoryId) {
        button.classList.remove(ACTIVE_CLASS);
      }
    });
  }

  const isNowActive = clickedButton.classList.contains(ACTIVE_CLASS);

  // --- 2. Manage ALL Style Visibility (The CORE Fix) ---
  for (const [id, map] of Object.entries(STYLE_MAP)) {
    const styleElements = document.querySelectorAll(map.selector);

    styleElements.forEach((element) => {
      if (id === categoryId && isNowActive) {
        // If this is the active category, SHOW its styles
        element.classList.add(map.visibleClass);
        element.classList.remove(map.hiddenClass);
      } else {
        // If this is ANY other category, or the current category is toggled OFF, HIDE its styles
        element.classList.add(map.hiddenClass);
        element.classList.remove(map.visibleClass);
      }
    });
  }

  // --- 3. Disable/Enable Other Category Buttons ---
  toggleOtherButtons(clickedButton, isNowActive);
}

// --- Event Listeners (Simplified due to the universal function) ---

document.addEventListener("DOMContentLoaded", () => {
  const hairButton = document.getElementById("hair");
  const earButton = document.getElementById("ear");

  if (hairButton) {
    // Pass the function reference, which will execute on click
    hairButton.addEventListener("click", function () {
      handleCategoryClick(hairButton);
    });
  }

  if (earButton) {
    earButton.addEventListener("click", function () {
      handleCategoryClick(earButton);
    });
  }
  // Add other buttons here
});
