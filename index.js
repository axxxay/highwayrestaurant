let mail = document.getElementById("subscribe-mail")
let mail2 = document.getElementById("subscribe-mail2")
let warning = document.getElementById("warning");
function subscribed(){
    if(mail.value === ""){
        warning.textContent = "*Enter email.";
        warning.style.color = "red";
    }
    else {
        warning.textContent = "Thanks for subscribe.";
        warning.style.color = "green";
       
    }
    if(mail2.value===""){
        warning2.textContent = "*Enter email.";
        warning2.style.color = "red";
    }
    else{
        warning2.textContent = "Thanks for subscribe.";
        warning2.style.color = "green";
    }
}