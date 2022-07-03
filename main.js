let input = document.querySelector('.inp');
const saveBtn = document.querySelector('.btn');
const todos = document.querySelector('.container');
const deleteBtn = document.querySelector('.dele');
//For js logic
let save = [];

// Events
window.addEventListener('DOMContentLoaded', getData);
saveBtn.addEventListener('click', addtask);
deleteBtn.addEventListener('click', removetask);
todos.addEventListener('dblclick', twoClick);
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Enter') {
    addtask();
  }
});
//Functions
function twoClick(e) {
  const allELe = document.querySelectorAll('p');
  for (let j = 0; j < allELe.length; j++) {
    if (allELe[j] === e.target) {
      console.log(allELe[j]);
      allELe[j].remove();
      let get = JSON.parse(localStorage.getItem('mydata'));
      get.splice(j, 1);
      delete save[j];
      localStorage.setItem('mydata', JSON.stringify(get));
      console.log(get);
    }
  }
}
function addtask() {
  if (input.value) {
    let newEle = document.createElement('p');
    let todo = input.value;
    saveData(todo);
    newEle.innerText = ` » ${input.value}`;
    todos.appendChild(newEle);
    input.value = '';
  }
}
function removetask() {
  removeLocal();
  save = [];
  const select = document.querySelectorAll('p');
  for (let j = 0; j < select.length; j++) {
    select[j].remove();
  }
}
// local storage
function saveData(todo) {
  save.push(todo);
  localStorage.setItem('mydata', JSON.stringify(save));
}
function getData() {
  let get = [];
  get = JSON.parse(localStorage.getItem('mydata'));
  if (get === null) {
    get = [];
  } else {
    get.forEach(function (todo) {
      if (todo === null) {
      } else {
        let newEle = document.createElement('p');
        saveData(todo);
        newEle.innerText = ` » ${todo}`;
        todos.appendChild(newEle);
      }
    });
  }
}
function removeLocal() {
  localStorage.removeItem('mydata');
}
