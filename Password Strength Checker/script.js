function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthText = document.getElementById("strengthText");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (password.length === 0) {
    strengthText.textContent = "";
    strengthText.className = "strength";
  } else if (strength <= 2) {
    strengthText.textContent = "Weak";
    strengthText.className = "strength weak";
  } else if (strength === 3 || strength === 4) {
    strengthText.textContent = "Medium";
    strengthText.className = "strength medium";
  } else {
    strengthText.textContent = "Strong";
    strengthText.className = "strength strong";
  }
}