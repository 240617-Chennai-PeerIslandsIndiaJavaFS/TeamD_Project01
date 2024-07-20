import { Users } from './data.js';

// Example messages data
const messagesData = [
    {
        receiver_id: 1,
        messages: [
            { subject: 'Meeting Reminder', content: 'Don\'t forget about the meeting tomorrow at 10 AM.' },
            { subject: 'Project Update', content: 'The project status has been updated to completed.' }
        ]
    },
    {
        receiver_id: 2,
        messages: [
            { subject: 'Design Review', content: 'Please review the new design mockups.' },
            { subject: 'Team Meeting', content: 'Team meeting rescheduled to 2 PM.' }
        ]
    }
];

// Function to display messages
function displayMessages(receiver_id) {
    const userMessages = messagesData.find(user => user.receiver_id === receiver_id);
    const accordionContainer = document.getElementById('messagesAccordion');
    accordionContainer.innerHTML = ''; // Clear previous content

    if (userMessages) {
        userMessages.messages.forEach((message, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('card');

            const accordionHeader = document.createElement('div');
            accordionHeader.classList.add('card-header');
            accordionHeader.id = heading${index};

            const accordionButton = document.createElement('h5');
            accordionButton.classList.add('mb-0');

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-link');
            button.setAttribute('data-toggle', 'collapse');
            button.setAttribute('data-target', #collapse${index});
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-controls', collapse${index});
            button.innerText = message.subject;

            accordionButton.appendChild(button);
            accordionHeader.appendChild(accordionButton);

            const accordionCollapse = document.createElement('div');
            accordionCollapse.id = collapse${index};
            accordionCollapse.classList.add('collapse');
            accordionCollapse.setAttribute('aria-labelledby', heading${index});
            accordionCollapse.setAttribute('data-parent', '#messagesAccordion');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.innerText = message.content;

            accordionCollapse.appendChild(cardBody);
            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionCollapse);

            accordionContainer.appendChild(accordionItem);
        });
    } else {
        accordionContainer.innerHTML = '<div class="card"><div class="card-body">No messages found.</div></div>';
    }
}

// Add event listener to the button
document.getElementById('showMessagesBtn').addEventListener('click', () => {
    const userId = 1; // Replace with dynamic user ID if needed
    displayMessages(userId); // Call the function to display messages
});