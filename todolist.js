// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the input field, add button, and the todo list
    const todoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Add an event listener to the add button for adding a new todo item
    addTodoButton.addEventListener('click', () => {
        // Get the trimmed value of the input field
        const todoText = todoInput.value.trim();
        // Check if the input is not empty
        if (todoText !== '') {
            // Create a new list item element
            const li = document.createElement('li');
            // Set the text content of the list item to the input value
            li.textContent = todoText;
            // Append the new list item to the todo list
            todoList.appendChild(li);
            // Clear the input field
            todoInput.value = '';
        }
    });

    // Add an event listener to the todo list for removing items
    todoList.addEventListener('click', (e) => {
        // Check if the clicked element is a list item
        if (e.target.tagName === 'LI') {
            // Remove the clicked list item
            e.target.remove();
        }
    });
});

