// VARIABLE DECLARATIONS
const input = document.querySelector('#guess')
const checkBtn = document.querySelector('#check')
const checkBtn2 = document.querySelector('#check2')
const prevNumEnt = document.querySelector('#prevNum')
const tryLeft = document.querySelector('#tryLeft')
const wrongNum = document.querySelector('#wrongNum')
const correct = document.querySelector('#correct')
const gameOver = document.querySelector('#gameOver')
const newGame = document.querySelector('#newGame')
counter = document.querySelector('#counter')

// GETTING A RANDOM NUMBER
const randomNum = (Math.floor(Math.random()*100));
//Tries counter initialized to 10 
counts = 10;
counter.innerHTML = counts;

// Event listener on the check button
checkBtn.addEventListener('click', () => {
  // To decrease the counter each time the check button is clicked
  counts--;
  counter.innerHTML = counts;
  
  // Checks if the number entered by the user is less than, else if it is greater than random number or if it is equal to the random number respectively
  if (input.value < randomNum) {
    wrongNum.innerHTML = 'Wrong number, too low';
    prevNumEnt.innerHTML += ' ' + input.value;
  } else if (input.value > randomNum) {
    wrongNum.innerHTML = 'Wrong number, too high';
    prevNumEnt.innerHTML += ' ' + input.value;
  } else {
    correct.innerHTML = 'Correct!! The number is ' + randomNum;
    wrongNum.style.display = 'none';
    newGame.style.display = 'block';
    checkBtn.style.display = 'none';
    checkBtn2.style.display = 'block'
  }
  
  // Checks if the tries left counter is equal to zero and stop the counting and also preventing the user from entering more numbers
  if (counts === 0) {
    newGame.style.display = 'block';
    gameOver.innerHTML = 'Out of tries. Game over!';
    wrongNum.style.display = 'none';
    checkBtn.style.display = 'none';
    checkBtn2.style.display = 'block'
  }
  input.value = "";
})

// Button to reload the page in order to start a new game
newGame.addEventListener('click', () => {
  location.reload();
})