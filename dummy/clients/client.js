import { Clients } from '../../JS/data.js';

// Function to display clients
function displayClients(clients) {
    const clientsContainer = document.getElementById('clientsContainer');
    clientsContainer.innerHTML = ''; // Clear previous content

    clients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.classList.add('col-md-4', 'mb-3');

        clientCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${client.client_contact_name}</h5>
                    <p class="card-text"><strong>Client ID:</strong> ${client.client_id}</p>
                    <p class="card-text"><strong>Company:</strong> ${client.client_company}</p>
                    <p class="card-text"><strong>Email:</strong> ${client.client_email}</p>
                    <p class="card-text"><strong>Phone:</strong> ${client.client_number}</p>
                    <p class="card-text"><strong>Address:</strong> ${client.address}</p>
                </div>
            </div>
        `;

        clientsContainer.appendChild(clientCard);
    });
}

// Add event listener to the button
document.getElementById('showClientsBtn').addEventListener('click', () => {
    displayClients(Clients); // Call the function to display clients
});
