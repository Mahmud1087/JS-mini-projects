const newItem = document.getElementsByClassName('new-item');
const darkMode = document.getElementById('darkmode');
const todos = document.getElementById('todos');
const createItem = document.getElementById('create-item');
const footer = document.getElementById('footer');
const createItemInput = document.getElementById('newItem');
const bgImage = document.getElementById('bgImage');
const checkMark = document.getElementsByClassName('checkmark');


newItem[0].style.borderRadius = '5px 5px 0 0'
darkMode.addEventListener('click', () => {
  if (darkMode.src==='http://localhost:8158/images/icon-moon.svg') {
    darkMode.src = 'http://localhost:8158/images/icon-sun.svg';
    bgImage.src = 'http://localhost:8158/images/bg-mobile-dark.jpg';
    document.body.style.background = 'hsl(235, 21%, 11%)'
    todos.style.background = 'hsl(235, 24%, 19%)'
    createItem.style.background = 'hsl(235, 24%, 19%)'
    footer.style.background = 'hsl(235, 24%, 19%)'
    for (let i = 0; i < newItem.length; i++) {
      newItem[i].style.borderBottom = '1px solid hsl(237, 14%, 26%)'
    }
    for (let i = 0; i < checkMark.length; i++) {
      checkMark[i].style.border = '1px solid hsl(237, 14%, 26%)'
    }
    
  } else {
    darkMode.src = 'http://localhost:8158/images/icon-moon.svg'
    bgImage.src = 'http://localhost:8158/images/bg-mobile-light.jpg'
    document.body.style.background = 'hsl(0, 0%, 98%)'
    todos.style.background = 'white'
    createItem.style.background = 'white'
    footer.style.backgroundColor = 'white'
    for (let i = 0; i < newItem.length; i++) {
      newItem[i].style.borderBottom = '1px solid hsl(236, 33%, 92%)'
    }
    for (let i = 0; i < checkMark.length; i++) {
      checkMark[i].style.border = '1px solid hsl(236, 33%, 92%)'
    }
  }
})