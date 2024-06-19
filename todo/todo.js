function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskElement(taskText);
        document.getElementById('pending-tasks-list').appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(li);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.onclick = () => completeTask(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function editTask(taskItem) {
    const newText = prompt('Edit task', taskItem.firstChild.textContent);
    if (newText !== null && newText.trim()) {
        taskItem.firstChild.textContent = newText.trim();
    }
}

function completeTask(taskItem) {
    document.getElementById('completed-tasks-list').appendChild(taskItem);
    taskItem.querySelector('.complete').remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}
