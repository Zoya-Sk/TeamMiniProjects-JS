// script.js
let totalAmount = 0;

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');
    
    const expenseName = nameInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value);
    
    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `${expenseName}: $${expenseAmount.toFixed(2)} <button onclick="removeExpense(this, ${expenseAmount})">Remove</button>`;
    
    expenseList.appendChild(listItem);
    totalAmount += expenseAmount;
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    
    nameInput.value = '';
    amountInput.value = '';
}

function removeExpense(element, amount) {
    element.parentElement.remove();
    totalAmount -= amount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}
