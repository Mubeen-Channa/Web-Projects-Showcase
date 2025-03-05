document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  const output =
  `<h3>Form Submitted Data:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Email:</strong> ${email}</p>`;

  document.getElementById("submittedData").innerHTML = output;
});
