const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const itemsCount = document.getElementById('items-count');

let todo = [];

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    todo.push({ text: todoInput.value, completed: false });
    todoInput.value = '';
    todoList.innerHTML = '';

    todo.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.text;
      todoList.appendChild(li);
    });

    itemsCount.textContent = todo.length.toString();
  }
});
