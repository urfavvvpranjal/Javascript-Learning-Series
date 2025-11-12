let abc = document.querySelector(".abc");

window.addEventListener("mousemove",(evt)=>{
    abc.style.top = evt.clientY + "px";
    abc.style.left = evt.clientX + "px";
});