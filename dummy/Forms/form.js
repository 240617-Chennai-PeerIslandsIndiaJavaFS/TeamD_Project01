import { Clients, Users } from './data.js';

console.log('Clients:', Clients);
console.log('Users:', Users);

document.getElementById('user-form').addEventListener('click', function() {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
        <form>
            <div class="form-group">
                <label for="userName">User Name</label>
                <input type="text" class="form-control" id="userName" placeholder="Enter user name">
            </div>
            <div class="form-group">
                <label for="userRole">User Role</label>
                <select class="form-control" id="userRole">
                    <option>Manager</option>
                    <option>Associate</option>
                </select>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="Enter phone number">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
    formContainer.classList.remove('d-none');
});

document.getElementById('show-client-form').addEventListener('click', function() {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
        <form>
            <div class="form-group">
                <label for="clientCompany">Client Company</label>
                <input type="text" class="form-control" id="clientCompany" placeholder="Enter client company">
            </div>
            <div class="form-group">
                <label for="clientContactName">Client Contact Name</label>
                <input type="text" class="form-control" id="clientContactName" placeholder="Enter client contact name">
            </div>
            <div class="form-group">
                <label for="clientNumber">Client Number</label>
                <input type="text" class="form-control" id="clientNumber" placeholder="Enter client number">
            </div>
            <div class="form-group">
                <label for="clientEmail">Client Email</label>
                <input type="email" class="form-control" id="clientEmail" placeholder="Enter client email">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter address">
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    `;
    formContainer.classList.remove('d-none');
});

document.getElementById('show-project-form').addEventListener('click', function() {
    if (typeof Clients === 'undefined' || typeof Users === 'undefined') {
        console.error('Clients or Users data is not loaded.');
        return;
    }
    
    console.log('Clients:', Clients);
    console.log('Users:', Users);

    const clients = Clients.map(client => `<option value="${client.client_id}">${client.client_company}</option>`).join('');
    const managers = Users.filter(user => user.user_role === 'Manager')
                          .map(manager => `<option value="${manager.user_id}">${manager.user_name}</option>`).join('');
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
        <form>
            <div class="form-group">
                <label for="clientId">Client</label>
                <select class="form-control" id="clientId">
                    ${clients}
                </select>
            </div>
            <div class="form-group">
                <label for="projectName">Project Name</label>
                <input type="text" class="form-control" id="projectName" placeholder="Enter project name">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Enter description"></textarea>
            </div>
            <div class="form-group">
                <label for="startDate">Start Date</label>
                <input type="date" class="form-control" id="startDate">
            </div>
            <div class="form-group">
                <label for="endDate">End Date</label>
                <input type="date" class="form-control" id="endDate">
            </div>
            <div class="form-group">
                <label for="managerId">Manager</label>
                <select class="form-control" id="managerId">
                    ${managers}
                </select>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    `;
    formContainer.classList.remove('d-none');
});
