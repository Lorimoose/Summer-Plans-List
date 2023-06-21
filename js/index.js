const submitButton = document.getElementById('task-btn');
const taskManager = new TaskManager();
const taskHtml = createTaskHtml;
const tasksList = document.querySelector('#root');


function validFormFieldInput(event) {
    console.log(taskManager.tasks);
    event.preventDefault();

    let newActivity = document.querySelector("#activity").value;
    if (newActivity == "") {
        alert("Please fill out an activity");
        return false;
    }

    let newPlace = document.querySelector("#place").value;
    if (newPlace == "") {
        alert("Please pick a place.");
        return false;
    }

    let aloneOrGroup = document.querySelector("#with-whom").value;
    if (aloneOrGroup == "") {
        alert("Please state if you will be doing this activity alone or with others.");
        return false;
    }

    let date = document.querySelector("#activity-date").value;
    if (date == "") {
        alert("Please choose a date.");
        return false;
    }
    
    // Clear input fields
    document.getElementById('activity').value = "";
    document.getElementById('place').value = "";
    document.getElementById('with-whom').value = "";
    document.getElementById('activity-date').value = "";

    taskManager.addTask(newActivity, newPlace, aloneOrGroup, date);
    taskManager.render()
}


submitButton.addEventListener('click', validFormFieldInput);


tasksList.addEventListener('click', (event) => { 
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = 'DONE';
        tasksList.render();
        tasksList.save();
      }
});