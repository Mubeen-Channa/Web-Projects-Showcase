const toggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = document.getElementById('theme-icon');
const themeName = document.getElementById('theme-name');
const day = document.getElementById('day');


// Toggle 
toggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  day.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);
  themeName.textContent = isDark ? "Dark Mode" : "Light Mode";
});
