import {Users} from "./data.js"
let user={};
// ---------------------------------   login   ---------------------------------------------------------------
let loginbtn=document.getElementById("loginbtn")
loginbtn.addEventListener("submit",
    (event)=>{
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value
        let data=Users.filter((user)=>{
            return(user.email===email && user.password===password)
        })
        if(data.length==0){
            window.location.href("./login.html")
        }
        else{
            localStorage.setItem("loggedInUser", JSON.stringify(data[0]));
            if(data[0].user_role=="Admin")
                window.open("./admin-page.html")
            else if(data[0].user_role=="Manager"){
                console.log(data[0].user_role);
                window.open("./manager-page.html")
            }
            else
                window.open("./member-page.html")
        }
    })


