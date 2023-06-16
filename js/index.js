const submitButton = document.getElementById('task-btn');
const taskManager = new TaskManager();
const taskHtml = createTaskHtml;


function validFormFieldInput(event) {
    console.log(taskManager.tasks);
    event.preventDefault();

    let newActivity = document.querySelector("#activity").value;
    console.log(newActivity)
    if (newActivity == "") {
        alert("Please fill out an activity");
        return false;
    }

    let newPlace = document.querySelector("#place").value;
    console.log(newPlace)
    if (newPlace == "") {
        alert("Please pick a place.");
        return false;
    }

    let aloneOrGroup = document.querySelector("#with-whom").value;
    console.log(aloneOrGroup)
    if (aloneOrGroup == "") {
        alert("Please state if you will be doing this activity alone or with others.");
        return false;
    }

    let newDate = document.querySelector("#date").value;
    console.log(newDate)
    if (newDate == "") {
        alert("Please choose a date.");
        return false;
    }
    document.getElementById('activity').value = "";
    document.getElementById('place').value = "";
    document.getElementById('with-whom').value = "";
    document.getElementById('date').value = "";

    taskManager.addTask('newActivity', 'newPlace', 'aloneOrGroup', 'newDate');
    taskManager.render()
}


submitButton.addEventListener('click', validFormFieldInput);