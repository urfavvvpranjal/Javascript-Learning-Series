let box = document.querySelector(".abc");

box.addEventListener("mouseover",()=>{
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseout",()=>{
    box.style.backgroundColor = "yellow";
});