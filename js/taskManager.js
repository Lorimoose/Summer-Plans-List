function createTaskHtml(newActivity, newPlace, aloneOrGroup, newDate) {
    const html = `
    <div id="root" class="card">
    <div class="card-body">
    <p class="card-text">Name: ${newActivity}</p>
    <p class="card-text">Place: ${newPlace}</p>
    <p class="card-text">With: ${aloneOrGroup}</p>
    <p class="card-text">Date: ${newDate}</p>
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

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(newActivity, newPlace, aloneOrGroup, newDate, status = 'TODO') {
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
            let taskHtml = createTaskHtml(currentTask['newActivity'], currentTask['newPlace'], currentTask['aloneOrGroup'], currentTask['newDate']);
            tasksHtmlList.push(taskHtml);
        }


        const tasksHtml = tasksHtmlList.join('\n');
        let root = document.getElementById('root');
        root.innerHTML = tasksHtml;
    }
}