function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() !== '') {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                todoItem.style.textDecoration = 'line-through';
            } else {
                todoItem.style.textDecoration = 'none';
            }
        });

        const label = document.createElement('label');
        label.textContent = todoInput.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoItem.remove();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}