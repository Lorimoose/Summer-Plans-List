const submitButton = document.getElementById("task-btn");
const taskManager = new TaskManager();
const taskHtml = createTaskHtml;
const tasksList = document.querySelector("#root");

taskManager.load();
taskManager.render();

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
    alert(
      "Please state if you will be doing this activity alone or with others."
    );
    return false;
  }

  let date = document.querySelector("#activity-date").value;
  if (date == "") {
    alert("Please choose a date.");
    return false;
  }

  // Clear input fields
  document.getElementById("activity").value = "";
  document.getElementById("place").value = "";
  document.getElementById("with-whom").value = "";
  document.getElementById("activity-date").value = "";

  taskManager.addTask(newActivity, newPlace, aloneOrGroup, date);
  taskManager.save();
  taskManager.render();
}

submitButton.addEventListener("click", validFormFieldInput);

tasksList.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    let parentTask = event.target.parentElement.parentElement;
    let taskId = Number(parentTask.dataset.task);
    let task = taskManager.getTaskById(taskId);
    task.status = "DONE";
    taskManager.save();
    taskManager.render();
  }

  if (event.target.classList.contains("delete-button")) {
    let parentTask = event.target.parentElement.parentElement;
    let taskId = Number(parentTask.dataset.task);
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});

function changeCardColor() {
    const list = document.getElementById("new").classList;
    list.add("myStyle");
  }
  