let a = document.querySelector(".blue");
let b = document.querySelector(".red");
let c = document.querySelector(".green");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    console.log("button clicked");
});

a.addEventListener("click",()=>{
    console.log("blue clicked");
},true);

b.addEventListener("click",()=>{
    console.log("red clicked");
});


c.addEventListener("click",()=>{
    console.log("green clicked");
});

 