// VARIABLE DECLARATION

const other_op = document.getElementById("other_op");
const operators = document.getElementById("operators");
const numbers = document.getElementById("numbers");

other_op.addEventListener('click', function() {
  other_op.style.right = 0;
  other_op.style.transition = '0.5s'
})

numbers.addEventListener('click', function() {
  other_op.style.right = '-73%';
})


// CALCULATION PART

const calField = document.getElementById("calField");

const equalTo = () => {
  let total;
  let operator = ['']
}