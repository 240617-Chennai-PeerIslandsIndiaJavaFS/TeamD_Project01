import { Users } from "./data.js"
import { Messages } from "./data.js";
// ---------------------------------   login   ---------------------------------------------------------------
let loginbtn = document.getElementById("loginbtn")
if(loginbtn!=null){
loginbtn.addEventListener("submit",
    (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        let data = Users.filter((user) => {
            return (user.email === email && user.password === password)
        })
        if (data.length == 0) {
            window.location.href("./login.html")
        }
        else {
            localStorage.setItem("loggedInUser", JSON.stringify(data[0]));
            if (data[0].user_role == "Admin")
                window.open("./admin-page.html")
            else if (data[0].user_role == "Manager") {
                console.log(data[0].user_role);
                window.open("./manager-page.html")
            }
            else
                window.open("./member-page.html")
        }
    })
}
// ---------------------------------------------------------------------

let showMessagesBtn = document.getElementById("showMessagesBtn")
if(showMessagesBtn!=null){
showMessagesBtn.addEventListener("click",
    () => {
        let user = JSON.parse(localStorage.getItem('loggedInUser'));
        const userMessages = Messages.filter(data => data.receiver_id == user.user_id);
        console.log(userMessages);
        let content = document.getElementById("content")
        content.innerHTML = "";
        let btn=document.createElement("button")
        btn.setAttribute("class","btn btn-success")
        btn.setAttribute("id","sendMessage")
        btn.innerHTML="Send Message"
        content.appendChild(btn)
        if (userMessages.length === 0) {
            content.innerHTML = '<div class="card"><div class="card-body">No messages found.</div></div>';
            return; 
        }

        const messageList = document.createElement('div');
        messageList.classList.add('list-group');

        userMessages.forEach(message => {
            const messageItem = document.createElement('a');
            messageItem.classList.add('list-group-item', 'list-group-item-action');
            messageItem.setAttribute('href', '#'); // Set a link (optional)
            messageItem.addEventListener('click', () => {
                alert(`Subject: ${message.subject}\nMessage: ${message.message}`); // Display message details on click
            });

            // Display subject in a heading element
            const subjectHeading = document.createElement('h5');
            subjectHeading.classList.add('card-title');
            subjectHeading.innerText = message.subject;
            messageItem.appendChild(subjectHeading);

            // Display message content in a paragraph element
            const messageContent = document.createElement('p');
            messageContent.classList.add('card-text');
            messageContent.innerText = message.message;
            messageItem.appendChild(messageContent);

            messageList.appendChild(messageItem);
        });

        content.appendChild(messageList);
    });
}


        // Display subject in a heading element
            



