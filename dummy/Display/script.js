import { Projects, Users } from './data.js';

// Sample project manager object stored in localStorage
let projectManager = {
    user_id: 3,
    user_name: "Eve Davis",
    user_role: "Manager",
    email: "eve.davis@example.com",
    password: "password123",
    phone: "777-888-9999",
    manager_id: null,
    status: "active"
};

// Store the project manager in localStorage (for demonstration purposes)
localStorage.setItem('projectManager', JSON.stringify(projectManager));

// Retrieve the project manager from localStorage
const manager = JSON.parse(localStorage.getItem('projectManager'));

// Function to display projects
function displayProjects() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear any existing content

    Projects.forEach(project => {
        if (project.manager_id === manager.user_id) {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'd-flex', 'align-items-stretch', 'mb-3');

            card.innerHTML = `
                <div class="card mb-4 w-100">
                    <div class="card-body">
                        <h5 class="card-title">${project.project_name}</h5>
                        <p class="card-text">${project.description}</p>
                        <p class="card-text"><small class="text-muted">Start Date: ${project.start_date}</small></p>
                        <p class="card-text"><small class="text-muted">End Date: ${project.end_date}</small></p>
                    </div>
                </div>
            `;

            contentDiv.appendChild(card);
        }
    });
}

// Function to get the manager's name by their ID
function getManagerName(managerId) {
    const manager = Users.find(user => user.user_id === managerId);
    return manager ? manager.user_name : 'None';
}

// Function to display users
function displayUsers() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear any existing content

    Users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'd-flex', 'align-items-stretch', 'mb-3');

        card.innerHTML = `
            <div class="card mb-4 w-100">
                <div class="card-body">
                    <h5 class="card-title">${user.user_name}</h5>
                    <p class="card-text">Role: ${user.user_role}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Phone: ${user.phone}</p>
                    <p class="card-text">Manager: ${getManagerName(user.manager_id)}</p>
                    <p class="card-text"><small class="text-muted">Status: ${user.status}</small></p>
                </div>
            </div>
        `;

        contentDiv.appendChild(card);
    });
}

// Add event listener to the buttons
document.getElementById('show-projects').addEventListener('click', displayProjects);
document.getElementById('show-users').addEventListener('click', displayUsers);
