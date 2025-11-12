
function score(...val){
    total = 0;
    val.forEach(function (val){
        total += val;
    });

    return total; 
}

console.log(score(23,45,12,42,42,41,11)); 