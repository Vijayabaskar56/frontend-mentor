// Extract necessary elements from HTML
const billInput = document.querySelector('input[name="price"]');
const peopleInput = document.querySelector('input[name="people"]');
const tipButtons = document.querySelectorAll('.btn');
const tipAmountElement = document.querySelector('.output');
const totalAmountElement = document.querySelector('#doller');


// Set default values
let tipPercentage = 0;
let billAmount = 0;
let peopleCount = 0;
let totalAmount = 0;

// Add event listeners
billInput.addEventListener('input', updateAmounts);tipPercentage
// peopleInput.addEventListener('input', updateAmounts);

tipButtons.forEach(button => {
  button.addEventListener('click', event => {
    tipPercentage = parseFloat(event.target.value);
    updateAmounts();
  });
});

// Define event handler functions
function updateAmounts() {
  billAmount = parseFloat(billInput.value);
  peopleCount = parseInt(peopleInput.value);
  
  const tipAmount = (tipPercentage / billAmount) * 100;
  const totalAmount = (billAmount + tipAmount) / peopleCount;
  const amountPerPerson = totalAmount / peopleCount;
  
  tipAmountElement.textContent = tipAmount.toFixed(2);
  totalAmountElement.textContent = totalAmount.toFixed(2);
  totalAmountElement.nextElementSibling.textContent = `Reset`;
}

// Reset button
document.querySelector('#btn-reset').addEventListener('click', event => {
  billInput.value = 0;
  peopleInput.value = 0;
  tipPercentage = 0;
  tipAmount = 0;
  totalAmount = 0;
  updateAmounts();
});