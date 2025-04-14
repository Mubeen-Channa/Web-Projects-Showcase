function generate_password() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]";

  let chars = "";
  if (document.getElementById("upper").checked) chars += upper;
  if (document.getElementById("lower").checked) chars += lower;
  if (document.getElementById("number").checked) chars += number;
  if (document.getElementById("symbol").checked) chars += symbol;

  if (chars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i=0; i<12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("password").value = password;
}

function copy_password() {
  const passField = document.getElementById("password");
  passField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
