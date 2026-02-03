console.log("Script.js is working");

// toggle light/dark mode
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}


const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change button text
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Toggle Light Mode";
  } else {
    toggleButton.textContent = "Toggle Dark Mode";
  }
});

// get information from api
