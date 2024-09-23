//3a
const tasks = []; //Tasks Array



//3b
const addTask = (task) => { //Function to add a task
    tasks.push(task); //Add Task
    console.log(task + " added to the task list"); //Confirmation of adding a task to the list
    console.log("Number of tasks: " + tasks.length);
}
addTask("Clean Car"); //Call Function
addTask("Work");
addTask("Sleep");


//3c
const listAllTasks = () => { //Listing all Tasks
    console.log("Tasks: ")
    tasks.forEach(
        (item) => {console.log(item) } //Outputting all tasks
    )
}
listAllTasks(); //Call Function



//3d
const deleteTask = (task) => { //Delete Task Function
    let index = tasks.indexOf(task); //Finding task using indexOf
    if(index > -1){
    tasks.splice(index,1); //Using splice to remove task from array
    console.log(task + " deleted from task list"); //Confirmation message of deletion
    } else{
        console.log(task + " not found in task list");
    }
    return tasks.length;
}

deleteTask("Work"); //Call Function