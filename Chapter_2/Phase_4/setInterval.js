let count = 10;

let lt = setInterval(()=>{
    if(count>=1){
        console.log(count);
        count--;
    }
    else{
        clearInterval(lt);
    }
},1000);