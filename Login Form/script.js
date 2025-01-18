const form = document.getElementById('contactForm');
const steps = document.querySelectorAll('.form-step');
const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const submitBtn = document.getElementById('submitBtn');
const loading = document.getElementById('loading');
const successModal = document.getElementById('successModal');
const charCount = document.getElementById('charCount');
const messageInput = document.getElementById('message');
const captchaQuestion = document.getElementById('captchaQuestion');
const captchaAnswer = document.getElementById('captchaAnswer');

let captchaCorrect = 0;

// Character Counter
messageInput.addEventListener('input', () => {
  charCount.innerText = messageInput.value.length;
});


// Next Step
nextBtn.addEventListener('click', () => {
  if (validateStep1()) {
    steps[0].style.display = 'none';
    steps[1].style.display = 'block';

    generateCaptcha();
  }
});


// Back Step
document.querySelector('.back-btn').addEventListener('click', () => {
  steps[1].style.display = 'none';
  steps[0].style.display = 'block';
});


// Captcha Generator
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  captchaCorrect = num1 + num2;

  captchaQuestion.innerText = `Solve: ${num1} + ${num2} = ?`;
}


// Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateStep2()) {
    loading.style.display = 'block';

    setTimeout(() => {
      loading.style.display = 'none';

      showModal();
      form.reset();

      steps[1].style.display = 'none';
      steps[0].style.display = 'block';
      charCount.innerText = '0';
    }, 2000);
  }
});


// Modal Functions
function showModal() {
  successModal.style.display = 'flex';
}
function closeModal() {
  successModal.style.display = 'none';
}


// validate Step 1
function validateStep1() {
  let valid = true;

  if (document.getElementById('name').value.trim() === '') {
    document.getElementById('nameError').innerText = 'Name is required';
    valid = false;
  }
  if (!/\S+@\S+\.\S+/.test(document.getElementById('email').value)) {
    document.getElementById('emailError').innerText = 'Valid email is required';
    valid = false;
  }
  if (messageInput.value.trim().length < 10) {  // Minimum 10 char length
    document.getElementById('messageError').innerText = 'Message must be at least 10 characters';
    valid = false;
  }
  return valid;
}


// validate Step 2
function validateStep2() {
  if (parseInt(captchaAnswer.value) !== captchaCorrect) {
    document.getElementById('captchaError').innerText = 'Wrong answer!';
    return false;
  }
  return true;
}