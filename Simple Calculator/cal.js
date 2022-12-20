// VARIABLE DECLARATION

const other_op = document.getElementById("other_op");
const operators = document.getElementById("operators");
const numbers = document.getElementById("numbers");
const calField = document.getElementById('calField');
const answerField = document.getElementById('answerField')

/* HIDING AND DISPLAYING THE ADVANCED OPERATORS */
other_op.addEventListener('click', function() {
  other_op.style.right = 0;
  other_op.style.transition = '0.5s'
})

numbers.addEventListener('click', function() {
  other_op.style.right = '-73%';
})

/* END */

function sin() {
  const sin = 'Math.sin';
  calField.value += `${sin}(`;
}

function equalTo() {
  answerField.innerHTML = eval(calField.value);
}

function deleteBtn() {
  calField.value = '';
  answerField.innerHTML = '';
}