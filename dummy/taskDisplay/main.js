// // import { tasks, Milestones } from './data.js';

// // document.addEventListener('DOMContentLoaded', () => {
// //     const milestonesContainer = document.getElementById('milestones-container');
    
// //     Milestones.forEach(milestone => {
// //         const column = document.createElement('div');
// //         column.className = 'col-md-3 column';
// //         column.id = `milestone-${milestone.milestone_id}`;
// //         column.innerHTML = `
// //             <h5>${milestone.status}</h5>
// //             <div class="task-list" id="task-list-${milestone.milestone_id}"></div>
// //         `;
// //         milestonesContainer.appendChild(column);
// //     });

// //     tasks.forEach(task => {
// //         const taskCard = document.createElement('div');
// //         taskCard.className = 'card task-card';
// //         taskCard.draggable = true;
// //         taskCard.id = `task-${task.task_id}`;
// //         taskCard.innerHTML = `
// //             <div class="card-body">
// //                 <h6 class="card-title">${task.task_name}</h6>
// //                 <p class="card-text">${task.description}</p>
// //             </div>
// //         `;
// //         const taskList = document.getElementById(`task-list-${Milestones.find(m => m.status === task.milestone).milestone_id}`);
// //         taskList.appendChild(taskCard);
// //     });

// //     document.querySelectorAll('.task-list').forEach(taskList => {
// //         new Sortable(taskList, {
// //             group: 'shared',
// //             animation: 150,
// //             onEnd: function (evt) {
// //                 const taskId = evt.item.id.split('-')[1];
// //                 const newMilestoneId = evt.to.id.split('-')[2];
// //                 const newMilestone = Milestones.find(m => m.milestone_id == newMilestoneId).status;

// //                 // Update task milestone in tasks array
// //                 const task = tasks.find(t => t.task_id == taskId);
// //                 task.milestone = newMilestone;
// //             }
// //         });
// //     });
// // });


// import { tasks, Milestones } from './data.js';

// document.addEventListener('DOMContentLoaded', () => {
//     const milestonesContainer = document.getElementById('milestones-container');
    
//     Milestones.forEach(milestone => {
//         const column = document.createElement('div');
//         column.className = 'col-md-3 column';
//         column.id = `milestone-${milestone.milestone_id}`;
//         column.innerHTML = `
//             <div class="milestone-header">${milestone.status}</div>
//             <div class="task-list" id="task-list-${milestone.milestone_id}"></div>
//         `;
//         milestonesContainer.appendChild(column);
//     });

//     tasks.forEach(task => {
//         const taskCard = document.createElement('div');
//         taskCard.className = 'card task-card';
//         taskCard.draggable = true;
//         taskCard.id = `task-${task.task_id}`;
//         taskCard.innerHTML = `
//             <div class="card-body">
//                 <h6 class="card-title">${task.task_name}</h6>
//             </div>
//         `;
//         const taskList = document.getElementById(`task-list-${Milestones.find(m => m.status === task.milestone).milestone_id}`);
//         taskList.appendChild(taskCard);
//     });

//     document.querySelectorAll('.task-list').forEach(taskList => {
//         new Sortable(taskList, {
//             group: 'shared',
//             animation: 150,
//             onEnd: function (evt) {
//                 const taskId = evt.item.id.split('-')[1];
//                 const newMilestoneId = evt.to.id.split('-')[2];
//                 const newMilestone = Milestones.find(m => m.milestone_id == newMilestoneId).status;

//                 // Update task milestone in tasks array
//                 const task = tasks.find(t => t.task_id == taskId);
//                 task.milestone = newMilestone;
//             }
//         });
//     });
// });


import { tasks, Milestones } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const milestonesContainer = document.getElementById('milestones-container');
    
    Milestones.forEach(milestone => {
        const column = document.createElement('div');
        column.className = 'col-md-3 column';
        column.id = `milestone-${milestone.milestone_id}`;
        column.innerHTML = `
            <div class="milestone-header">${milestone.status}</div>
            <div class="task-list" id="task-list-${milestone.milestone_id}"></div>
        `;
        milestonesContainer.appendChild(column);
    });

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'card task-card';
        taskCard.draggable = true;
        taskCard.id = `task-${task.task_id}`;
        taskCard.innerHTML = `
            <div class="card-body">
                <h6 class="card-title">${task.task_name}</h6>
            </div>
        `;
        const taskList = document.getElementById(`task-list-${Milestones.find(m => m.status === task.milestone).milestone_id}`);
        taskList.appendChild(taskCard);
    });

    const taskLists = document.querySelectorAll('.task-list');
    taskLists.forEach(taskList => {
        new Sortable(taskList, {
            group: 'shared',
            animation: 150,
            onEnd: function (evt) {
                const taskId = evt.item.id.split('-')[1];
                const newMilestoneId = evt.to.id.split('-')[2];
                const newMilestone = Milestones.find(m => m.milestone_id == newMilestoneId).status;

                // Update task milestone in tasks array
                const task = tasks.find(t => t.task_id == taskId);
                task.milestone = newMilestone;
            }
        });
    });
});
