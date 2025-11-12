let form = document.querySelector("form");
let email = document.querySelector("#email");
let password  = document.querySelector("#password");

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#messageResult").textContent = "";

    const emailreg = /^(?!.*\.\.)([A-Za-z0-9._%+-]+)@([A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+)$/;
    const passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;

    let emailans = emailreg.test(email.value);
    let passwordans = passwordreg.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        isValid = false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "password is incorrect";
        isValid = false;
    }
    if(isValid){
         document.querySelector("#messageResult").textContent = "Everthing is correct";
    }

});