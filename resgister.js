function resgister() {
    const Username = document.getElementById('Username').value;
    const Fullname = document.getElementById('Full name').value;
    const Password= document.getElementById('Password').value;
    const ConfirmPassword= document.getElementById('Confirm Password').value;
    
    if(Username === "" && Fullname === "" && Password === "" && ConfirmPassword === "") {
       alert("fill all");
       return;
    }

    if(Password !== ConfirmPassword) {
         alert("Password incorrect");
         return;
    }
    
   alert ("You're registered");
    }
 