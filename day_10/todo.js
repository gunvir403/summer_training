document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('inputBox');
    const addTaskBtn = document.getElementById('btn');
    const taskList = document.getElementById('list-container');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => addTaskToDOM(taskText));
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#list-container li span').forEach(span => {
            tasks.push(span.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTaskToDOM(taskText) {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
        const editButton = document.createElement('button');
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => {
            taskInput.value = taskText;
            taskList.removeChild(listItem);
        });
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
            saveTasks();
        });
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToDOM(taskText);
            saveTasks();
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    loadTasks();
});