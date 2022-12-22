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
function cos() {
  const cos = 'Math.cos';
  calField.value += `${cos}(`;
}
function tan() {
  const tan = 'Math.tan';
  calField.value += `${tan}(`;
}
function ln() {
  const sin = 'Math.sin'; Math.ln()
  calField.value += `${sin}(`;
}
function log() {
  const log = 'Math.log';
  calField.value += `${log}(`;
}
function exp() {
  const exp = 'Math.exp';
  calField.value += `${exp}(`;
}
function sqrt() {
  const sqrt = 'Math.sqrt';
  calField.value += `${sqrt}(`;
}
function pi() {
  const pi = 'Math.pi';
  calField.value += `${pi}(`;
}
function pow() {
  const pow = 'Math.pow';
  calField.value += `${pow}(`;
}
function log() {
  const log = 'Math.log';
  calField.value += `${log}(`;
}
/*function log() {
  const log = 'Math.log';
  calField.value += `${log}(`;
}*/

function equalTo() {
  answerField.innerHTML = eval(calField.value);
}

function deleteBtn() {
  if (calField.value === '' || calField.value === 0) {
  answerField.innerHTML = '';
  }
  calField.value = calField.value.slice(0,-1);
}

function deleteAllBtn() {
  calField.value = '';
  answerField.innerHTML = 0;
}