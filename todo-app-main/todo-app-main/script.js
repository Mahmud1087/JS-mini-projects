/** VARIABLE DECLARATIONS **/

const newItem = document.getElementsByClassName('new-item');
const modeSwitch = document.getElementById('modeSwitch');
const todos = document.getElementById('todos');
const createItem = document.getElementById('create-item');
const footer = document.getElementById('footer');
const todosFooter = document.getElementById('todos-footer')
const createItemInput = document.getElementById('newItem');
const bgImage = document.getElementById('bgImage');
const checkBox = document.getElementsByClassName('checkmark');
const checkBoxMenu = document.getElementsByClassName('main');
const clearBtn = document.getElementById('clear-btn');
const dragNdrop = document.getElementById('dragNdrop');
const attribution = document.getElementById('attribution');
const itemsLeft = document.getElementById('itemsLeft')
const addNewItem = document.getElementById('addNewItem')
const addNewItemInput = document.getElementById('addNewItemInput')


/** DARKMODE AND LIGHT MODE IMPLEMENTATION BY CHANGING THE COLORS AND BACKGROUND COLORS **/

modeSwitch.addEventListener('click', () => {
  /** COLORS TO BE DISPLAYED FOR DARKMODE **/
 if (modeSwitch.src===`${location.origin}/images/icon-moon.svg`) {
    modeSwitch.src = `${location.origin}/images/icon-sun.svg`;
    bgImage.src = `${location.origin}/images/bg-mobile-dark.jpg`;
    document.body.style.background = 'hsl(235, 21%, 11%)';
    todos.style.background = 'hsl(235, 24%, 19%)';
    todosFooter.style.color = 'hsl(234, 11%, 52%)';
    createItem.style.background = 'hsl(235, 24%, 19%)';
    footer.style.background = 'hsl(235, 24%, 19%)';
    footer.style.color = 'hsl(234, 11%, 52%)';
    clearBtn.style.color = 'hsl(234, 11%, 52%)';
    createItemInput.style.color = 'hsl(234, 11%, 52%)';
    dragNdrop.style.color = 'hsl(234, 11%, 52%)';
    attribution.style.color = 'hsl(234, 11%, 52%)';
    for (let i = 0; i < newItem.length; i++) {
      newItem[i].style.borderBottom = '1px solid hsl(237, 14%, 26%)'
    }
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].style.border = '1px solid hsl(237, 14%, 26%)'
    }
    for (let i = 0; i < checkBoxMenu.length; i++) {
      checkBoxMenu[i].style.color = 'hsl(234, 39%, 85%)'
    }
    
  } else {
    /** COLORS TO BE DISPLAYED FOR LIGHT MODE **/
    modeSwitch.src = `${location.origin}/images/icon-moon.svg`;
   bgImage.src = `${location.origin}/images/bg-mobile-light.jpg`;
    document.body.style.background = 'hsl(0, 0%, 98%)';
    todos.style.background = 'white';
    todosFooter.style.color = 'hsl(236, 9%, 61%)';
    createItem.style.background = 'white';
    footer.style.backgroundColor = 'white';
    footer.style.color = '(236, 9%, 61%)';
    clearBtn.style.color = 'hsl(236, 9%, 61%)';
    createItemInput.style.color = 'hsl(236, 9%, 61%)';
    dragNdrop.style.color = 'hsl(236, 9%, 61%)';
    attribution.style.color = 'hsl(236, 9%, 61%)';
    for (let i = 0; i < newItem.length; i++) {
      newItem[i].style.borderBottom = '1px solid hsl(233, 11%, 84%)'
    }
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].style.border = '1px solid hsl(236, 33%, 92%)'
    }
    for (let i = 0; i < checkBoxMenu.length; i++) {
      checkBoxMenu[i].style.color = 'hsl(234, 11%, 52%)'
    }
    
  }
})


/** ADDING ELEMENTS (TODO LISTS) WHEN THE ADD BUTTON IS CLICKED **/
  addNewItem.addEventListener('click', () => {
  /** CREATING NEW ELEMENTS LIST **/
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const img = document.createElement('img');
  
  /** SETTING THE ELEMENTS ATTRIBUTES **/
  div.setAttribute('class', 'new-item');
  label.setAttribute('class', 'main');
  input.setAttribute('type', 'checkbox');
  span.setAttribute('class', 'checkmark');
  img.setAttribute('src', 'images/icon-cross.svg');
  
  label.appendChild(input)
  label.appendChild(span)
  label.innerHTML += createItemInput.value
  div.appendChild(label)
  div.appendChild(img)
  
  if (createItemInput.value === '') {
    alert('Please enter a todo')
  } else {
    todos.insertBefore(div, todosFooter);
    todosLength = todos.children.length;
    itemsLeft.innerHTML = `${todosLength-1} items left`;
    clearBtn.style.display = 'block';
    footer.style.display = 'flex';
    dragNdrop.style.display = 'block';
  }
  //createItemInput.value = '';
 
  label.addEventListener('click', () => {
    //if (label.classList.contains('completed')) {
      //label.classList.remove('completed')
    //} 
    if (!label.classList.contains('completed')){
      label.classList.add('completed')
    }
  })
  
  img.addEventListener('click', () => {
    todos.removeChild(div)
    todosLength--
    itemsLeft.innerHTML=`${todosLength-1} items left`
    if (todosLength-1 === 0) {
      itemsLeft.innerHTML = `No items`;
      clearBtn.style.display = 'none';
      footer.style.display = 'none';
      dragNdrop.style.display = 'none';
    }
  })
})
