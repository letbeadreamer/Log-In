const loginForm = document.getElementById("form-in");

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Login Successful!");
});
