const totalAmountRaised = document.getElementById('total-raised');
const amountReceivedThisMonth = document.getElementById('received-month');
const totalAmountPaid = document.getElementById('total-paid');
const totalEarnings = document.getElementById('total-earnings');

let totalRaised = 0;
let receivedThisMonth = 0;
let totalPaid = 0;
let earnings = 0;

function updateDisplay() {
    totalAmountRaised.textContent = `Total Arrecadado: R$ ${totalRaised.toFixed(2)}`;
    amountReceivedThisMonth.textContent = `Recebido Este Mês: R$ ${receivedThisMonth.toFixed(2)}`;
    totalAmountPaid.textContent = `Total Pago: R$ ${totalPaid.toFixed(2)}`;
    totalEarnings.textContent = `Total Rendido: R$ ${earnings.toFixed(2)}`;
}

function addFunds(amount) {
    totalRaised += amount;
    receivedThisMonth += amount;
    updateDisplay();
}

function payAmount(amount) {
    totalPaid += amount;
    updateDisplay();
}

function calculateEarnings(rate) {
    earnings = totalRaised * rate;
    updateDisplay();
}

// Example usage
addFunds(100); // Add funds to the total
payAmount(50); // Pay an amount
calculateEarnings(0.05); // Calculate earnings with a 5% rate

updateDisplay();