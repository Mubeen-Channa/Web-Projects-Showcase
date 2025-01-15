let startTime = 0;
let elapsedTime = 0;
let timerId = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  if (timerId) stopTimer();
  else startTimer();
});

resetBtn.addEventListener('click', () => {
  stopTimer();
  elapsedTime = 0;
  display.innerText = '00:00:0000';
});

function startTimer() {
  startBtn.innerText = 'Stop';
  startTime = performance.now() - elapsedTime;
  timerId = setInterval(updateDisplay, 1);
}

function stopTimer() {
  startBtn.innerText = 'Start';
  clearInterval(timerId);
  timerId = null;
  elapsedTime = performance.now() - startTime;
}

function updateDisplay() {
  const now       = performance.now();
  const diff      = now - startTime;
  const totalNano = diff * 1e6;
  const minutes   = Math.floor(diff / 60000);
  const seconds   = Math.floor((diff % 60000) / 1000);

  const first4ns = Math.floor((totalNano % 1e9) / 1e5);  

  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const ns = String(first4ns).padStart(4, '0');

  display.innerText = `${mm}:${ss}:${ns}`;
}
