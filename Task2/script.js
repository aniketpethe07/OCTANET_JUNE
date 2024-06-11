document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const categorySelect = document.getElementById('category');
    const taskList = document.getElementById('task-list');
    const maxTasks = 5;

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();

        if (taskList.children.length >= maxTasks) {
            alert('You cannot add more than 5 tasks.');
            return;
        }

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const category = categorySelect.value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} (Due: ${dueDate}, Priority: ${priority}, Category: ${category})</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = '';
        categorySelect.value = '';

        taskItem.querySelector('.complete').addEventListener('click', () => {
            taskItem.classList.toggle('complete');
        });

        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
