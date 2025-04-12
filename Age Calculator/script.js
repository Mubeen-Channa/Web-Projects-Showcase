function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerHTML = `<span>Please select your date of birth.</span>`;
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years  = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days   = today.getDate() - birthDate.getDate();

  if (days < 0){
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0){
    years--;
    months += 12;
  }

  result.innerHTML = `<span>🎉 You are:</span>
                        <span>${years} Years</span>
                        <span>${months} Months</span>
                        <span>${days} Days old</span>`;
}