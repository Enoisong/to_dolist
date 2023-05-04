const render = (todosList) => {
    const sortedTodos = todosList.list.sort((a, b) => a.index - b.index);
    const todosContainerTask = document.querySelector('.todos');
    let todosHtml = '';
    sortedTodos.forEach((todo) => {
      todosHtml += `  <div class="todo-item">
                            <div> 
                            <input type="checkbox" />                         
                                <input id="${todo.index}" class="todo-edit" type="text" value="${todo.description}" />                               
                            </div>
                            <button id="${todo.index}" class="remove-btn"> <i class="fas fa-trash"></i></button>                          
                        </div>          
        `;
    });
    todosContainerTask.innerHTML = todosHtml;
  
    // remove todo
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const element = btn.parentNode;
        element.remove();
        todosList.removeTodo(e.target.parentNode.id);
      });
    });
  
    // edit todo
    const todosContent = document.querySelectorAll('.todo-edit');
    todosContent.forEach((todo) => {
      todo.addEventListener('focusin', (e) => {
        todosList.editTodo(Number(e.target.id), e.target.value);
      });
    });
  };
  
  export default render;
  