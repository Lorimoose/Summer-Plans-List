function createTaskHtml(newActivity, newPlace, aloneOrGroup, date) {
  const html = `
<div class="card col-sm-8 col-md-6 col-lg-4 col-xl-3 m-4">
    <div class="card-body">
        <p class="card-text">Name: ${newActivity}</p>
        <p class="card-text">Place: ${newPlace}</p>
        <p class="card-text">With: ${aloneOrGroup}</p>
        <p class="card-text">Date: ${date}</p>
    </div>
    <div class="card-footer">
        Status:
        <a href="#" class="btn btn-success">Done</a>
        <a href="#" class="btn btn-danger">Delete</a>
    </div>
</div>
    `;
  return html;
}

function formatDate(dateInput){
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
      const formattedDate = date.toLocaleDateString('en-US');


      let currentTask = this.tasks[i];
      console.log(currentTask);

      let taskHtml = createTaskHtml(
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
}
