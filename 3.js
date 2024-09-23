//3a
const tasks = []; //Tasks array of strings.



//3b
const addTask = (task) => { //Function to add a new task to the task array.
    tasks.push(task); //Add the new task to the tasks array.
    console.log(task + " added to the task list"); //Confirmation of adding a task to the list
    console.log("Number of tasks: " + tasks.length); // Output the total number of tasks in the list.
}

// Adding sample tasks to the task list by calling the addTask function.
addTask("Clean Car");
addTask("Work");
addTask("Sleep");


//3c
const listAllTasks = () => { // Function to list all tasks currently stored in the tasks array.
    console.log("Tasks: ") // Log a message heading for the task list.
    tasks.forEach(
        (item) => { console.log(item) } //Outputting all tasks in the tasks array.
    )
}
listAllTasks(); //Call Function to display all tasks.



//3d
const deleteTask = (task) => { //Function to delete a specific task from the tasks array.
    let index = tasks.indexOf(task); //Finding task using indexOf
    if (index > -1) { //If the task exists in the array (index is found).
        tasks.splice(index, 1); //Using splice to remove task from array.
        console.log(task + " deleted from task list"); //Confirmation message of deletion
    } else {
        console.log(task + " not found in task list"); // Log a message if the task wasn't found.
    }
    return tasks.length; // Return the updated number of tasks remaining in the array.
}

deleteTask("Work"); //Call function to delete the task "Work" from the list.