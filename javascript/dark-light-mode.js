// Author: Kush Bharakhada

function mode() {
  var darkLightModeIcon = document.getElementById("dark-light-mode-icon");
  document.body.classList.toggle("light-mode");
  // Check if current icon is light mode or not and change icon accordingly
  if (document.body.classList.contains("light-mode")) {
    darkLightModeIcon.src = "images/darkmode-icon.png";
  }
  else {
    darkLightModeIcon.src = "images/lightmode-icon.png";
  }
}