let h1 = document.getElementById("abcd");
console.dir(h1);

let h2 = document.getElementsByClassName("abcd");   
console.log(h2);

let query = document.querySelector("h1");
console.dir(query);

let queryAll = document.querySelectorAll("h1");
console.dir(queryAll);  

h1.innerHTML = "Hello i changed it";