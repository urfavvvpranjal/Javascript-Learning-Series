let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    if(nm.value.length<=2){
        document.querySelector(".hide_name").style.display = "initial";
    }
    else{
        ocument.querySelector(".hide_name").style.display = "none";
    }
});

