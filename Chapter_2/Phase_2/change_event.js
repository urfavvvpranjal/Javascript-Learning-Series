let sel = document.querySelector("select");

let device = document.querySelector("#device");

sel.addEventListener("change",(evt)=>{
    device.textContent = (`${evt.target.value} device selected`);
    console.log(evt.target.value);
});