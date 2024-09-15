// Function to create a task element with delete functionality
function createTaskElement(taskText, currentList, targetList) {
    const li = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const crossBtn = document.createElement('button');
    crossBtn.innerHTML = '&times;';  // Cross symbol

    // Cross button deletes the task from the current list
    crossBtn.addEventListener('click', function() {
        currentList.removeChild(li);
    });

    // Clicking on the task text moves it to the target list
    taskContent.addEventListener('click', function() {
        if (currentList !== targetList) {
            const newTask = createTaskElement(taskText, targetList, currentList);
            targetList.appendChild(newTask);
            currentList.removeChild(li);
        }
    });

    li.appendChild(taskContent);
    li.appendChild(crossBtn);

    return li;
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const doingList = document.getElementById('doingList');

        const newTask = createTaskElement(taskText, doingList, document.getElementById('doneList'));
        doingList.appendChild(newTask);

        taskInput.value = '';  // Clear input field
    }
});
