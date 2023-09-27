// buttonToggle.js

export function toggleButtonVisibility(isButtonVisible, setButtonVisibility) {
  // Use the functional update form of useState to ensure the latest state is used
  setButtonVisibility((prevIsButtonVisible) => !prevIsButtonVisible);
}
