const li = document.querySelectorAll('li');
const taskContainer = document.querySelector('.task-container');

const todoTitleInput = document.querySelector('input[name="todo-title"]')
const todoBodyInput = document.querySelector('input[name="todo-body"]')

const addBtn = document.querySelector('.add-btn');
const editBtn = document.querySelector('.edit-btn');
const completeBtn = document.querySelector('.complete-btn');

// Add new task

addBtn.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML += `<b>${todoTitleInput.value}</b> ${todoBodyInput.value} <button class="edit-btn">Edit</button><button class="complete-btn">Complete</button>`;
    taskContainer.appendChild(newTask);
});
