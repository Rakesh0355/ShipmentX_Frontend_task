const taskInput = document.getElementById('taskInput'); 
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<span class="task-text">${taskText}</span>
            <button class="remove-btn">Remove</button>`;

        taskList.appendChild(li);
        saveData(); 
    }

    taskInput.value = ''; 
}


taskList.addEventListener('click', function(evnt) {
    if (evnt.target.tagName === "LI") {
     
        evnt.target.classList.toggle('completed');
        saveData();
    } else if (evnt.target.tagName === "BUTTON") {
   
        evnt.target.parentElement.remove();
        saveData(); 
    }
});


function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}


function showData() {
    taskList.innerHTML = localStorage.getItem("data") || '';
}


document.addEventListener('DOMContentLoaded', showData);



