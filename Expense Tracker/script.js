const balanceEl = document.getElementById('balance');
const incomeEl  = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const historyEl = document.getElementById('history');
const descInput = document.getElementById('desc');
const amtInput  = document.getElementById('amt');
const form      = document.getElementById('transaction-form');

let transactions = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const desc = descInput.value.trim();   // Name of Expense
  const amt = +amtInput.value;           // Amount of Expense

  if (desc === '' || isNaN(amt)) return;

  const transaction = { desc, amt };
  transactions.push(transaction);
  updateUI();

  // Reset   
  descInput.value = '';
  amtInput.value = '';
});

function updateUI() {
  historyEl.innerHTML = '';

  const amounts = transactions.map(t => t.amt);
  const total   = amounts.reduce((acc, val) => acc + val, 0);

  const income  = amounts.filter(val => val > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0);

  balanceEl.textContent = `${total} PKR`;
  incomeEl.textContent  = `+${income} PKR`;
  expenseEl.textContent = `${expense} PKR`;

  transactions.forEach(t => {
    const li = document.createElement('li');
    li.classList.add(t.amt >= 0 ? 'income' : 'expense');
    li.textContent = `${t.desc}: ${t.amt} PKR`;
    historyEl.appendChild(li);
  });
}