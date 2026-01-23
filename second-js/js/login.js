function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMsg = document.getElementById('error');

    if(username === "") {
        errorMsg.style.visibility = "visible";
        errorMsg.style.color = "maroon";
        errorMsg.style.backgroundColor = "red";
        errorMsg.innerHTML = "Username is required!";
    }
    else if (password === "") {
        errorMsg.style.visibility = "visible";
        errorMsg.style.color = "white";
        errorMsg.style.backgroundColor = "red";
        errorMsg.innerHTML = "Password is required!";
    }
    else if((username === "kayeveraces" && password === "12345678")) {
        errorMsg.style.visibility = "visible";
        errorMsg.style.color = "green";
        errorMsg.style.backgroundColor = "lawngreen";
        errorMsg.innerHTML = "Login Successful!";
    }
    else {
        errorMsg.style.visibility = "visible";
        errorMsg.style.color = "white";
        errorMsg.style.backgroundColor = "red";
        errorMsg.innerHTML = "Username and Password is incorrect!";
    }

             }
