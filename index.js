function login(){

    let email=document.getElementById("mail");
    let Password=document.getElementById("passcode");

    if (email=="fabiantom4362@gmail.com" && Password=="11058"){
        alert("your name is Thomas  and your email is "+email);
    }else if(email==""&&Password==""){
        alert("You entered no credentials");
    };
}