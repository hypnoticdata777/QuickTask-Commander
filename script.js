//select elements
const addBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

//Load tasks from LocalStorage
window.onload= () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => createTaskElement(task.text, task.completed));

};

//Save tasks to LocalStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create task
    function createTaskElement(text, completed = false) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent= text;

        //Mark complete on click
        span.onclick = () => {
            li.classList.toggle('completed');
            saveTasks();
        };
    
        //Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = () => {
            li.remove();
            saveTasks();

        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        if (completed) li.classList.add ('completed');
        taskList.appendChild(li);
    }

    // Handle Add
    addBtn.onclick = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            createTaskElement(taskText);
            saveTasks();
            newTaskInput.value = '';
        }
    };

    // Enter key support
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addBtn.click();
    });
