let button = document.querySelector("button");

function setDarkLight(){
    const themeChecker = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (themeChecker) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        button.textContent = "Switch to Light Mode ☀️";

    }   
    else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        button.textContent = "Switch to Dark Mode 🌙";
    }
}
setDarkLight();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{
    setDarkLight();
});


button.addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        button.textContent = "Switch to Dark Mode 🌙";
        localStorage.setItem("name","light");

    }
    else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        button.textContent = "Switch to Light Mode ☀️";
        localStorage.setItem("name","dark");
    }
});
if(localStorage.getItem("name")){
    document.body.classList.remove("light","dark");
    document.body.classList.add(localStorage.getItem("name"));

}
else{
    setDarkLight();
}