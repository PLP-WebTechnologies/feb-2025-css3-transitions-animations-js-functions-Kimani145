const button = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

const DARK = "dark-theme";
const LIGHT = "light-theme";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Apply previously selected theme
if (selectedTheme) {
  body.classList.add(selectedTheme);
  themeIcon.textContent = selectedIcon || "🌙";
} else {
  body.classList.add(LIGHT);
  themeIcon.textContent = "🌙";
}

// Get current theme
const getCurrentTheme = () => body.classList.contains(DARK) ? DARK : LIGHT;
const getCurrentIcon = () => themeIcon.textContent === "🌙" ? "☀️" : "🌙";

// Toggle theme and save preferences
button.addEventListener("click", () => {
  if (getCurrentTheme() === DARK) {
    body.classList.remove(DARK);
    body.classList.add(LIGHT);
    themeIcon.textContent = "🌙";
  } else {
    body.classList.remove(LIGHT);
    body.classList.add(DARK);
    themeIcon.textContent = "☀️";
  }

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", themeIcon.textContent);
});

// Animate button on load
button.animate([
  { transform: "translateY(0)" },
  { transform: "translateY(-10px)" },
  { transform: "translateY(0)" }
], {
  duration: 1000,
  iterations: Infinity
});
