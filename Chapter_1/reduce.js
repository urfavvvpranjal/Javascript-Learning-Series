let arr = [1,2,3,4,5];

let newarr = arr.reduce(function(accumulator, val){
    return accumulator+val;
},10);