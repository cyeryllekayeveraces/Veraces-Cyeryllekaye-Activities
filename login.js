function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "") {
        alert("Username is required!")
    }
    else if (password === "") {
        alert("Password is required!")
    }
    else if((username === "kayeveraces" && password === "12345678")) {
        alert("Login successful!");
    }
    else {
        alert("Username and Pasword is incorrect!");
    }

}