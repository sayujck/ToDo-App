function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    
    let taskText = taskInput.value;
    
    if (taskText === '') {
        alertMsg.textContent="Please enter a task!";
        return;
    }

    alertMsg.textContent='' 

    let li = document.createElement('li');
    li.textContent = taskText;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';                 
    removeBtn.className = 'removeBtn remove-btn bg-danger';

    li.appendChild(removeBtn);

    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    taskList.appendChild(li);

    taskInput.value = '';
}