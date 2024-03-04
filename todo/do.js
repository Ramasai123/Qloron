document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('Task');
    const prioritySelect = document.getElementById('select');
    const submitButton = document.getElementById('Submit');
    const taskList = document.querySelector('#two table');

    let rowCount = 0; // Counter for row index

    submitButton.addEventListener('click', function () {
        const taskName = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskName && priority !== 'select') {
            addTask(taskName, priority);
            taskInput.value = '';
            prioritySelect.selectedIndex = 0;
        } else {
            alert('Please enter a task and select its priority.');
        }
    });

    function addTask(taskName, priority) {
        const row = taskList.insertRow(-1);
        const taskCell = row.insertCell(0);
        const priorityCell = row.insertCell(1);
        const deleteCell = row.insertCell(2);

        taskCell.textContent = taskName;
        priorityCell.textContent = priority;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            row.remove();
            updateRowColors(); 
        });
        deleteCell.appendChild(deleteButton);
        row.classList.add(rowCount % 2 === 0 ? 'even-row' : 'odd-row');
        rowCount++;
        updateRowColors();
    }
    function updateRowColors() {
        const rows = taskList.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('even-row', 'odd-row');
            rows[i].classList.add(i % 2 === 0 ? 'even-row' : 'odd-row');
        }
    }
});
