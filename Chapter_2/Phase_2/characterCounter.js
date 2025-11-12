let input = document.querySelector("input");
let count = document.querySelector(".count");

let limit =20;

input.addEventListener("input",()=>{  
    const left = limit-input.value.length;  
    count.textContent = left
    if(left>=0){
        count.style.color = "black";
    }
    else{
        count.style.color = "red";
    }
    
});