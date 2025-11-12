let form = document.querySelector("form");

let input = document.querySelectorAll("input");

let main = document.querySelector(".main");

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile_pic");

    let img = document.createElement("img");
    img.setAttribute("src",input[0].value);

    let h3 = document.createElement("h3");
    h3.innerText = input[1].value;

    let h5 = document.createElement("h5");
    h5.innerText = input[2].value;

    let p = document.createElement("p");
    p.innerText = input[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);

    input.forEach(function(evt){
        if(evt.type !=="submit"){
            evt.value = "";
        }
    });
});
