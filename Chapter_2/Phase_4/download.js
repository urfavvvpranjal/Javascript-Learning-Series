let count = 10;
let progress = 0;
let interval;
let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let resetBtn = document.querySelector("resetBtn");
let progressbar = document.querySelector(".progress-bar");
let progresspercent = document.querySelector("#progressPercent");

startBtn.addEventListener("click",()=>{
    let interval = setInterval(()=>{
        if(progress<100){
            progress++;
            progressbar.style.width = progress;
            progressPercent.textContent =  progress +"%";   
        }   
        else{
            progressPercent.textContent =  "download complete";
            clearInterval(interval);  
        } 

    },100);
});

pauseBtn.addEventListener("click",()=>{
    if(interval){
        clearInterval(interval);
        interval = null;
        progressPercent.textContent =  progress + "%Paused";
    }
});

resetBtn.addEventListener("click",()=>{
    let lt = setInterval(()=>{
        if(progress<100){
            progress++;
            progressbar.style.width = progress;
            progressPercent.textContent =  progress;   
        }   
        else{
            progressPercent.textContent =  "download complete";
          clearInterval(interval);  
        } 

    },100);
});