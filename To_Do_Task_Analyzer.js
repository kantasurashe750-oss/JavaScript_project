// Challenge 37 — To-Do Task Analyzer ⭐
// We have an array of tasks with their status:
// let tasks = [
//     { name: "Study JavaScript", completed: true },
//     { name: "Practice Coding", completed: false },
//     { name: "Read Documentation", completed: true },
//     { name: "Build Mini Project", completed: false },
//     { name: "Revise Arrays", completed: true }
// ];
// Your tasks
// 1. ⭐ Count completed tasks
// 2. ⭐ Count pending tasks
// 3. Find the names of completed tasks
// 4. Find the names of pending tasks

let tasks = [
    { name: "Study JavaScript", completed: true },
    { name: "Practice Coding", completed: false },
    { name: "Read Documentation", completed: true },
    { name: "Build Mini Project", completed: false },
    { name: "Revise Arrays", completed: true }
];


let completedCount = 0;

for(let task of tasks){

    if(task.completed){

    completedCount++;

    }
}

let pendingTask = 0;

for( let task of tasks){

    if(!task.completed){

        pendingTask++;

    }
}

console.log();

let completedTask = []

for (let task of tasks){

    if(task.completed){

        completedTask.push(task.name);
    }
}

console.log(completedTask);

let pending = [];

for( let task of tasks){

    if(!task.completed){

        pending.push(task.name);
    }
}

console.log(pending);