function createTaskHtml(id, newActivity, newPlace, aloneOrGroup, date, status) {
  const html = `
<div id="new" class="card col-auto m-4 ${status === "TODO" ? "oldStyle" : "myStyle"}" data-task=${id}>
    <div class="card-body">
        <p class="card-text">Name: ${newActivity}</p>
        <p class="card-text">Place: ${newPlace}</p>
        <p class="card-text">With: ${aloneOrGroup}</p>
        <p class="card-text">Date: ${date}</p>
    </div>
    <div class="card-footer">
        Status:
        <button class="btn btn-success done-button">Mark As Done</button>
        <button class="btn btn-danger delete-button">Delete</button>
    </div>
</div>
    `;
  return html;
}

function formatDate(dateInput) {
  let taskDate = new Date(dateInput);
  let formattedDate = taskDate.toLocaleDateString();
  return formattedDate;
}

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(newActivity, newPlace, aloneOrGroup, newDate, status = "TODO") {
    this.currentId++;
    const taskObj = {
      id: this.currentId,
      newActivity,
      newPlace,
      aloneOrGroup,
      newDate,
      status,
    };
    this.tasks.push(taskObj);
  }

  render() {
    const tasksHtmlList = [];
    for (var i = 0; i < this.tasks.length; i++) {
      let currentTask = this.tasks[i];
      console.log(currentTask);

      let taskHtml = createTaskHtml(
        currentTask.id,
        currentTask.newActivity,
        currentTask.newPlace,
        currentTask.aloneOrGroup,
        formatDate(currentTask.newDate),
        currentTask.status
      );
      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("\n");
    let root = document.getElementById("root");
    root.innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
        return foundTask;
      }
    }
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);

    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
  }

  load() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasksJson = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJson);
    }

    const storedCurrentId = localStorage.getItem("currentId");
    if (storedCurrentId) {
      const currentId = Number(localStorage.getItem("currentId"));
      this.currentId = currentId;
    }
  }

  deleteTask(taskId) {
    let newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }
}
