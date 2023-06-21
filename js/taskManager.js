function createTaskHtml(id, newActivity, newPlace, aloneOrGroup, date) {
  const html = `
<div class="card col-auto m-4 id=${id}">
    <div class="card-body">
        <p class="card-text">Name: ${newActivity}</p>
        <p class="card-text">Place: ${newPlace}</p>
        <p class="card-text">With: ${aloneOrGroup}</p>
        <p class="card-text">Date: ${date}</p>
    </div>
    <div class="card-footer">
        Status:
        <button class="btn btn-success done-button">Mark As Done</button>
        <a href="#" class="btn btn-danger">Delete</a>
    </div>
</div>
    `;
  return html;
}

function formatDate(dateInput) {
  let taskDate = new Date(dateInput);
  let formattedDate = taskDate.toDateString();
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
      const date = new Date();
      const formattedDate = date.toDateString();

      let currentTask = this.tasks[i];
      console.log(currentTask);

      let taskHtml = createTaskHtml(
        currentTask.id,
        currentTask["newActivity"],
        currentTask["newPlace"],
        currentTask["aloneOrGroup"],
        formattedDate
      );
      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("\n");
    let root = document.getElementById("root");
    root.innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i=0; i<this.tasks.length; i++) {
      let task = this.tasks[i]
      if (task.id === taskId) {
        foundTask = task;
        return foundTask;
      }
    }
  }
}
