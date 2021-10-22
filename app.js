// Define ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListeners('submit', addTask);

}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element



    e.preventDefault();
}