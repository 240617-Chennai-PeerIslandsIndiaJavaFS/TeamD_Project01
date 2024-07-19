import { Projects } from './data.js';

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
    const projectsDiv = document.getElementById('projects');
    projectsDiv.innerHTML = ''; // Clear any existing content

    Projects.forEach(project => {
        if (project.manager_id === manager.user_id) {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'd-flex', 'align-items-stretch','mb-3');

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

            projectsDiv.appendChild(card);
        }
    });
}

// Add event listener to the button
document.getElementById('show-projects').addEventListener('click', displayProjects);
