const todoTitleInput = document.querySelector('input[name="todo-title"]')
const todoBodyInput = document.querySelector('input[name="todo-body"]')
const taskContainer = document.querySelector('.task-container');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {

    const task = document.createElement('li');
    task.className = 'task';

    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-title';
    taskTitle.innerText = `${todoTitleInput.value}`

    const taskBody = document.createElement('span');
    taskBody.className = 'task-body';
    taskBody.innerText = `${todoBodyInput.value}`

    const editBtn = document.createElement('button')
    editBtn.className = 'edit-btn';
    editBtn.innerText = 'Edit';

    const completeBtn = document.createElement('button')
    completeBtn.className = 'complete-btn';
    completeBtn.innerText = 'Complete';

    task.appendChild(taskTitle);
    task.appendChild(taskBody);
    task.appendChild(editBtn);
    task.appendChild(completeBtn);

    taskContainer.appendChild(task);


    // Change button text from edit to save

    editBtn.addEventListener('click', () =>{
        editBtn.innerHTML === "Edit" ? editBtn.innerHTML = "Save" : editBtn.innerHTML = "Edit";
    });

    // Change task background color

     completeBtn.addEventListener('click', () =>{
        task.classList.toggle("completed");
    });
});





