let button = document.querySelector("#button");

let inp = document.querySelector("#inp");

button.addEventListener("click",()=>{
    inp.click();
});

inp.addEventListener("change", (evt)=>{
    const btn_name = evt.target.files[0];
    if(btn_name){
        button.textContent = evt.target.files[0].name;
    }
}); 