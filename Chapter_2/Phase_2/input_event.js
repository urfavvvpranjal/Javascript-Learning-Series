let input  = document.querySelector("input");

//this code shows only the data attribute values which is stored one by one in input Event 

// input.addEventListener("input",(evt)=>{
//     console.log(evt.data);
// });


//this show whole input event 

input.addEventListener("input",(evt)=>{
    if(evt.data !== null){
        console.log(evt.data);
    }   
});