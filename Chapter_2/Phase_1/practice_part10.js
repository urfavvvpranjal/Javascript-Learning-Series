let img = document.createElement("img");

img.setAttribute("src","https://plus.unsplash.com/premium_photo-1681566925827-d1969127dd3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2Vob2xkZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
);

//document.body.prepend(img);

//also 

document.querySelector("body").prepend(img);

img.classList.add("placeholder");